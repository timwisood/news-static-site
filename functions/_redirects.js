export async function onRequest(context) {
  // 处理所有请求的重定向
  const url = new URL(context.request.url);
  
  // 如果请求的是根路径，返回index.html
  if (url.pathname === '/') {
    return context.env.ASSETS.fetch(new Request(new URL('/index.html', url)));
  }
  
  // 对于其他路径，尝试直接返回对应的文件
  return context.env.ASSETS.fetch(context.request);
}