const banner = `\
                  ___           ___                 
      ___        /\\  \\         /\\  \\          ___   
     /\\  \\      /::\\  \\       /::\\  \\        /\\  \\  
     \\:\\  \\    /:/\\:\\  \\     /:/\\:\\  \\       \\:\\  \\ 
     /::\\__\\  /:/  \\:\\  \\   /::\\~\\:\\  \\      /::\\__\\
  __/:/\\/__/ /:/__/ \\:\\__\\ /:/\\:\\ \\:\\__\\  __/:/\\/__/
 /\\/:/  /    \\:\\  \\ /:/  / \\/_|::\\/:/  / /\\/:/  /   
 \\::/__/      \\:\\  /:/  /     |:|::/  /  \\::/__/    
  \\:\\__\\       \\:\\/:/  /      |:|\\/__/    \\:\\__\\    
   \\/__/        \\::/  /       |:|  |       \\/__/    
                 \\/__/         \\|__|               's Blog
`;

export default () => ({
  print() {
    console.log(banner);
    console.log('你好哇，我是Iori😀');
    console.log('不要开F12做些奇怪的事情哦🤔');
    console.log('不如来点个star🤤');
    console.log('https://github.com/iori2333/blog');
  }
});