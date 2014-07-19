var zippy;
var foo = function() {
   $.Ajax.load({url:"http://10.10.10.254/data/UsbDisk2/Volume1", method:"PROPFIND", dataType:"xml", headInfo:{"Content-Type":"text/xml; charset=\"utf-8\"",Depth:1},callBack:function (flg,v){zippy=v; console.log(flg,v);}})
   alert("out foo");
};

// $.Ajax.load({url:"http://10.10.10.254/data/UsbDisk2/Volume1", method:"PROPFIND", dataType:"xml", headInfo:{"Content-Type":"text/xml; charset=\"utf-8\"",Depth:1},callBack:function (flg,v){console.log(flg,v);}})
// $.Ajax.load({url:"http://10.10.10.254/data/UsbDisk2/Volume1/images/IMG_2212.CR2", method:"COPY", dataType:"text", ovTime:0, onCensor:"xx", headInfo:{Destination:"http://10.10.10.254/data/UsbDisk2/Volume1/foo.CR2",Depth:1},callBack:function (){console.log(arguments);}})
