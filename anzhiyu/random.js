var posts=["2023/04/03/hello-world/","2023/04/03/第一篇文章/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};