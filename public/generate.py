from hashlib import md5
import json
import os
import re
import shutil
from time import strptime, mktime

reg = re.compile("^@(.*)=(.*)$")
root = "edit"


def handle_file(content: list[str]):
    state = {}
    for i, line in enumerate(content):
        if (m := reg.match(line)) is not None:
            state[m.group(1)] = m.group(2)
        else:
            break
    if "title" not in state or "author" not in state or "time" not in state:
        raise Exception("Missing required fields")

    if "tags" in state:
        state["tags"] = state["tags"].split(",")
    else:
        state["tags"] = []

    if "pinned" in state:
        state["pinned"] = state["pinned"].lower() == "true"

    if "preview" not in state:
        state["preview"] = "\n".join(content[i : i + 2]).strip()

    state["timestamp"] = 1000 * mktime(strptime(state["time"], "%Y-%m-%d %H:%M:%S"))
    state["id"] = md5("".join(content).encode("utf-8")).hexdigest()
    del state["time"]

    return state, content[i:]


if __name__ == "__main__":
    os.makedirs("articles", exist_ok=True)
    os.makedirs("tags", exist_ok=True)
    index = []
    tags = {}
    shutil.copytree(os.path.join(root, "images"), "images", dirs_exist_ok=True)
    for file in os.listdir(root):
        if not file.endswith(".md"):
            continue
        with open(os.path.join(root, file), "r") as f:
            try:
                state, content = handle_file(f.readlines())
            except Exception as e:
                print(f"Error in {file}: {e}")
                continue
            index.append(state)
            article_id = state["id"]
            with open(f"articles/{article_id}.md", "w") as af:
                af.write("\n".join(content).strip())
            for tag in state["tags"]:
                if tag not in tags:
                    tags[tag] = []
                tags[tag].append(article_id)

    with open("articles/index.json", "w") as f:
        json.dump(index, f, ensure_ascii=False)

    with open("tags/index.json", "w") as f:
        json.dump(tags, f, ensure_ascii=False)
