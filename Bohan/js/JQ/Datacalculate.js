
//方法二:使用正则替换所有中文字符,然后再计算
getBLen = function(str) {
  if (str == null) return 0;
  if (typeof str != "string"){
    str += "";
  }
  return str.replace(/[^\x00-\xff]/g,"a").length;
}
