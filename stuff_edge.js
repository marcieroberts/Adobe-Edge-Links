/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';
   fonts['andika, sans-serif']='<script src=\"http://use.edgefonts.net/andika:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:['-1px','280px','100.1%','500px','auto','auto'],
            fill:["rgba(22,160,133,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy2',
            type:'rect',
            rect:['0px','780px','100.1%','500px','auto','auto'],
            fill:["rgba(14,131,205,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy14',
            type:'rect',
            rect:['-1px','1275px','100.1%','500px','auto','auto'],
            fill:["rgba(243,156,18,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy9',
            type:'rect',
            rect:['0px','2275px','100.1%','500px','auto','auto'],
            fill:["rgba(42,197,108,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy11',
            type:'rect',
            rect:['-1px','3275px','100.1%','500px','auto','auto'],
            fill:["rgba(239,94,80,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy15',
            type:'rect',
            rect:['-1px','3770px','100.1%','500px','auto','auto'],
            fill:["rgba(236,240,241,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy10',
            type:'rect',
            rect:['-1px','2775px','100.1%','500px','auto','auto'],
            fill:["rgba(14,131,205,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['-1px','4270px','100%','500px','auto','auto'],
            fill:["rgba(67,90,107,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy8',
            type:'rect',
            rect:['-1px','1775px','100.1%','500px','auto','auto'],
            opacity:1,
            fill:["rgba(158,72,127,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"color4"
         },
         {
            id:'Text',
            type:'text',
            rect:['0%','66px','100%','117px','auto','auto'],
            text:"Creative Hover Links",
            align:"center",
            font:['source-sans-pro, sans-serif',72,"rgba(115,115,115,1.00)","300","none",""]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['0.1%','153px','100%','60px','auto','auto'],
            text:"made with Adobe Edge + CSS",
            align:"center",
            font:['source-sans-pro, sans-serif',24,"rgba(115,115,115,1.00)","300","none",""]
         },
         {
            id:'effect1',
            type:'rect',
            rect:['21.1%','505','12.6%','auto','auto','auto']
         },
         {
            id:'effect1Copy',
            type:'rect',
            rect:['38.6%','505','12.6%','auto','auto','auto']
         },
         {
            id:'effect1Copy2',
            type:'rect',
            rect:['56.2%','505px','12.6%','auto','auto','auto']
         },
         {
            id:'effect1Copy3',
            type:'rect',
            rect:['74%','505px','12.6%','auto','auto','auto']
         },
         {
            id:'effect2',
            type:'rect',
            rect:['23%','1010','10.4%','auto','auto','auto']
         },
         {
            id:'effect2Copy',
            type:'rect',
            rect:['39.7%','1010','10.4%','auto','auto','auto']
         },
         {
            id:'effect2Copy2',
            type:'rect',
            rect:['57%','1010','10.4%','auto','auto','auto']
         },
         {
            id:'effect2Copy3',
            type:'rect',
            rect:['76.3%','1010','10.4%','auto','auto','auto']
         },
         {
            id:'effect3',
            type:'rect',
            rect:['21.2%','1481','10.4%','auto','auto','auto']
         },
         {
            id:'effect3Copy',
            type:'rect',
            rect:['37.8%','1481','10.4%','auto','auto','auto']
         },
         {
            id:'effect3Copy2',
            type:'rect',
            rect:['55.2%','1481','10.4%','auto','auto','auto']
         },
         {
            id:'effect3Copy3',
            type:'rect',
            rect:['70.3%','1481','10.4%','auto','auto','auto']
         },
         {
            id:'effect4',
            type:'rect',
            rect:['21.2%','2011','10.4%','auto','auto','auto']
         },
         {
            id:'effect4Copy',
            type:'rect',
            rect:['37.8%','2011','10.4%','auto','auto','auto']
         },
         {
            id:'effect4Copy2',
            type:'rect',
            rect:['53.5%','2011','10.4%','auto','auto','auto']
         },
         {
            id:'effect4Copy3',
            type:'rect',
            rect:['69.5%','2011','10.4%','auto','auto','auto']
         },
         {
            id:'effect5',
            type:'rect',
            rect:['37%','2524px','10.4%','auto','auto','auto'],
            userClass:"effect5"
         },
         {
            id:'effect5Copy3',
            type:'rect',
            rect:['21.2%','2524px','10.4%','auto','auto','auto'],
            userClass:"effect5"
         },
         {
            id:'effect7',
            type:'rect',
            rect:['16.6%','3520','16.5%','auto','auto','auto']
         },
         {
            id:'effect7Copy',
            type:'rect',
            rect:['34.8%','3520','16.5%','auto','auto','auto']
         },
         {
            id:'effect7Copy2',
            type:'rect',
            rect:['51.9%','3520','16.5%','auto','auto','auto']
         },
         {
            id:'effect7Copy3',
            type:'rect',
            rect:['69.2%','3520','16.5%','auto','auto','auto']
         },
         {
            id:'Text2Copy3',
            type:'text',
            rect:['-460px','3510px','194px','41px','auto','auto'],
            text:"Gannett",
            align:"center",
            font:['source-sans-pro, sans-serif',36,"rgba(236,240,241,1)","300","none","normal"]
         },
         {
            id:'effect8',
            type:'rect',
            rect:['16.6%','3985px','16.5%','auto','auto','auto']
         },
         {
            id:'effect8Copy',
            type:'rect',
            rect:['34%','3985px','16.5%','auto','auto','auto']
         },
         {
            id:'effect8Copy2',
            type:'rect',
            rect:['51.9%','3985px','16.5%','auto','auto','auto']
         },
         {
            id:'effect8Copy3',
            type:'rect',
            rect:['71.7%','3985px','16.5%','auto','auto','auto']
         },
         {
            id:'effect6',
            type:'rect',
            rect:['19.8%','3002px','10.8%','auto','auto','auto']
         },
         {
            id:'effect6Copy',
            type:'rect',
            rect:['36.8%','3001px','10.8%','auto','auto','auto']
         },
         {
            id:'effect6Copy2',
            type:'rect',
            rect:['53.5%','3001px','10.8%','auto','auto','auto']
         },
         {
            id:'effect6Copy3',
            type:'rect',
            rect:['71.1%','3002px','10.8%','auto','auto','auto']
         },
         {
            id:'effect5Copy',
            type:'rect',
            rect:['53.5%','2522px','10.4%','auto','auto','auto'],
            userClass:"effect5"
         },
         {
            id:'effect5Copy2',
            type:'rect',
            rect:['68.7%','2522px','10.4%','auto','auto','auto'],
            userClass:"effect5"
         },
         {
            id:'effect9',
            type:'rect',
            rect:['16.6%','4479','auto','auto','auto','auto']
         },
         {
            id:'effect9Copy',
            type:'rect',
            rect:['34.8%','4479','auto','auto','auto','auto']
         },
         {
            id:'effect9Copy2',
            type:'rect',
            rect:['52.2%','4479','auto','auto','auto','auto']
         },
         {
            id:'effect9Copy3',
            type:'rect',
            rect:['72%','4479','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'effect4Copy2',
            symbolName:'effect4'
         },
         {
            id:'effect6',
            symbolName:'effect6'
         },
         {
            id:'effect9Copy2',
            symbolName:'effect9'
         },
         {
            id:'effect3Copy2',
            symbolName:'effect3'
         },
         {
            id:'effect7Copy3',
            symbolName:'effect7'
         },
         {
            id:'effect1Copy',
            symbolName:'effect1'
         },
         {
            id:'effect4',
            symbolName:'effect4'
         },
         {
            id:'effect8',
            symbolName:'effect8'
         },
         {
            id:'effect9',
            symbolName:'effect9'
         },
         {
            id:'effect1Copy3',
            symbolName:'effect1'
         },
         {
            id:'effect1Copy2',
            symbolName:'effect1'
         },
         {
            id:'effect7Copy',
            symbolName:'effect7'
         },
         {
            id:'effect2Copy',
            symbolName:'effect2'
         },
         {
            id:'effect8Copy2',
            symbolName:'effect8'
         },
         {
            id:'effect3Copy3',
            symbolName:'effect3'
         },
         {
            id:'effect5',
            symbolName:'effect5'
         },
         {
            id:'effect8Copy',
            symbolName:'effect8'
         },
         {
            id:'effect2Copy3',
            symbolName:'effect2'
         },
         {
            id:'effect2',
            symbolName:'effect2'
         },
         {
            id:'effect8Copy3',
            symbolName:'effect8'
         },
         {
            id:'effect3Copy',
            symbolName:'effect3'
         },
         {
            id:'effect9Copy3',
            symbolName:'effect9'
         },
         {
            id:'effect3',
            symbolName:'effect3'
         },
         {
            id:'effect6Copy3',
            symbolName:'effect6'
         },
         {
            id:'effect2Copy2',
            symbolName:'effect2'
         },
         {
            id:'effect4Copy',
            symbolName:'effect4'
         },
         {
            id:'effect4Copy3',
            symbolName:'effect4'
         },
         {
            id:'effect6Copy2',
            symbolName:'effect6'
         },
         {
            id:'effect7',
            symbolName:'effect7'
         },
         {
            id:'effect9Copy',
            symbolName:'effect9'
         },
         {
            id:'effect5Copy3',
            symbolName:'effect5'
         },
         {
            id:'effect5Copy2',
            symbolName:'effect5'
         },
         {
            id:'effect5Copy',
            symbolName:'effect5'
         },
         {
            id:'effect6Copy',
            symbolName:'effect6'
         },
         {
            id:'effect7Copy2',
            symbolName:'effect7'
         },
         {
            id:'effect1',
            symbolName:'effect1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_effect7Copy3}": [
            ["style", "left", '69.24%'],
            ["style", "width", '16.45%']
         ],
         "${_effect9Copy3}": [
            ["style", "left", '72.03%']
         ],
         "${_effect5Copy2}": [
            ["style", "top", '2522px'],
            ["style", "left", '68.73%'],
            ["style", "width", '10.43%']
         ],
         "${_effect1}": [
            ["style", "width", '12.55%']
         ],
         "${_effect4Copy}": [
            ["style", "left", '37.8%'],
            ["style", "width", '10.43%']
         ],
         "${_effect6Copy}": [
            ["style", "top", '3001px'],
            ["style", "left", '36.83%'],
            ["style", "width", '10.77%']
         ],
         "${_effect7}": [
            ["style", "left", '16.61%'],
            ["style", "width", '16.45%']
         ],
         "${_effect8Copy3}": [
            ["style", "top", '3985px'],
            ["style", "left", '71.69%'],
            ["style", "width", '16.45%']
         ],
         "${_effect5Copy3}": [
            ["style", "top", '2524px'],
            ["style", "left", '21.19%'],
            ["style", "width", '10.43%']
         ],
         "${_effect7Copy}": [
            ["style", "left", '34.83%'],
            ["style", "width", '16.45%']
         ],
         "${_effect2Copy2}": [
            ["style", "left", '57.03%'],
            ["style", "width", '10.43%']
         ],
         "${_effect1Copy}": [
            ["style", "left", '38.64%'],
            ["style", "width", '12.55%']
         ],
         "${_effect7Copy2}": [
            ["style", "left", '51.87%'],
            ["style", "width", '16.45%']
         ],
         "${_effect3Copy2}": [
            ["style", "left", '55.22%'],
            ["style", "width", '10.43%']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(115,115,115,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '0.08%'],
            ["style", "font-size", '24px'],
            ["style", "top", '153px'],
            ["style", "text-align", 'center'],
            ["style", "height", '60px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '100%']
         ],
         "${_effect3Copy3}": [
            ["style", "left", '70.26%'],
            ["style", "width", '10.43%']
         ],
         "${_RectangleCopy10}": [
            ["style", "top", '2775px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(14,131,205,1.00)'],
            ["style", "left", '-1px'],
            ["style", "width", '100.09%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '5000px'],
            ["style", "overflow", 'hidden']
         ],
         "${_effect4Copy3}": [
            ["style", "left", '69.49%'],
            ["style", "width", '10.43%']
         ],
         "${_RectangleCopy9}": [
            ["style", "top", '2275px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(42,197,108,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100.09%']
         ],
         "${_effect8Copy}": [
            ["style", "top", '3985px'],
            ["style", "left", '33.98%'],
            ["style", "width", '16.45%']
         ],
         "${_effect2Copy3}": [
            ["style", "left", '76.3%'],
            ["style", "width", '10.43%']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '3510px'],
            ["style", "height", '41px'],
            ["style", "left", '-460px'],
            ["style", "width", '194px']
         ],
         "${_effect4}": [
            ["style", "left", '21.19%'],
            ["style", "width", '10.43%']
         ],
         "${_effect3}": [
            ["style", "left", '21.19%'],
            ["style", "width", '10.43%']
         ],
         "${_effect2}": [
            ["style", "width", '10.43%']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '4270px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(67,90,107,1.00)'],
            ["style", "left", '-1px'],
            ["style", "width", '100%']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '780px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(14,131,205,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100.09%']
         ],
         "${_effect4Copy2}": [
            ["style", "left", '53.47%'],
            ["style", "width", '10.43%']
         ],
         "${_Rectangle}": [
            ["style", "top", '280px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(22,160,133,1.00)'],
            ["style", "left", '-1px'],
            ["style", "width", '100.09%']
         ],
         "${_effect9Copy}": [
            ["style", "left", '34.83%']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(115,115,115,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '0%'],
            ["style", "font-size", '72px'],
            ["style", "top", '66px'],
            ["style", "text-align", 'center'],
            ["style", "height", '117px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '100%']
         ],
         "${_effect9Copy2}": [
            ["style", "left", '52.2%']
         ],
         "${_effect5Copy}": [
            ["style", "top", '2522px'],
            ["style", "left", '53.47%'],
            ["style", "width", '10.43%']
         ],
         "${_effect1Copy2}": [
            ["style", "top", '505px'],
            ["style", "left", '56.18%'],
            ["style", "width", '12.55%']
         ],
         "${_effect6}": [
            ["style", "top", '3002px'],
            ["style", "left", '19.75%'],
            ["style", "width", '10.77%']
         ],
         "${_RectangleCopy14}": [
            ["style", "top", '1275px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(243,156,18,1.00)'],
            ["style", "left", '-1px'],
            ["style", "width", '100.09%']
         ],
         "${_effect5}": [
            ["style", "top", '2524px'],
            ["style", "left", '36.95%'],
            ["style", "width", '10.43%']
         ],
         "${_RectangleCopy11}": [
            ["style", "top", '3275px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(239,94,80,1.00)'],
            ["style", "left", '-1px'],
            ["style", "width", '100.09%']
         ],
         "${_effect1Copy3}": [
            ["style", "top", '505px'],
            ["style", "left", '73.98%'],
            ["style", "width", '12.55%']
         ],
         "${_RectangleCopy15}": [
            ["style", "top", '3770px'],
            ["style", "height", '500px'],
            ["color", "background-color", 'rgba(236,240,241,1.00)'],
            ["style", "left", '-1px'],
            ["style", "width", '100.09%']
         ],
         "${_RectangleCopy8}": [
            ["style", "top", '1775px'],
            ["color", "background-color", 'rgba(158,72,127,1.00)'],
            ["style", "height", '500px'],
            ["style", "opacity", '1'],
            ["style", "left", '-1px'],
            ["style", "width", '100.09%']
         ],
         "${_effect6Copy3}": [
            ["style", "top", '3002px'],
            ["style", "left", '71.06%'],
            ["style", "width", '10.77%']
         ],
         "${_effect6Copy2}": [
            ["style", "top", '3001px'],
            ["style", "left", '53.49%'],
            ["style", "width", '10.77%']
         ],
         "${_effect3Copy}": [
            ["style", "left", '37.8%'],
            ["style", "width", '10.43%']
         ],
         "${_effect8}": [
            ["style", "top", '3985px'],
            ["style", "left", '16.61%'],
            ["style", "width", '16.45%']
         ],
         "${_effect2Copy}": [
            ["style", "left", '39.66%'],
            ["style", "width", '10.43%']
         ],
         "${_effect8Copy2}": [
            ["style", "top", '3985px'],
            ["style", "left", '51.86%'],
            ["style", "width", '16.45%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"EFFECT1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['41.9%','0px','15.9%','67px','auto','auto'],
      font: ['source-sans-pro, sans-serif',36,'rgba(227,233,237,1.00)','normal','none','normal'],
      id: 'EFFECT1',
      text: 'GANNETT',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_EFFECT1}": [
            ["style", "top", '0px'],
            ["style", "font-size", '36px'],
            ["color", "color", 'rgba(227,233,237,1.00)'],
            ["style", "height", '67px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "left", '41.86%'],
            ["style", "width", '15.88%']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '1180px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bracket1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(227,233,237,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: ']',
      align: 'center',
      rect: ['181px','0px','112px','106px','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(227,233,237,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3Copy',
      text: '[',
      align: 'center',
      rect: ['0px','0px','112px','106px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "left", '181px'],
            ["style", "top", '0px']
         ],
         "${_Text3Copy}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "width", '293px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect5": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1.00)','300','none','normal'],
      type: 'text',
      id: 'Text3Copy18',
      text: 'Gannett',
      align: 'center',
      rect: ['0%','0px','99.6%','39px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '123px']
         ],
         "${_Text3Copy18}": [
            ["style", "top", '0px'],
            ["style", "font-size", '36px'],
            ["color", "color", 'rgba(236,240,241,1.00)'],
            ["style", "height", '39px'],
            ["style", "left", '0%'],
            ["style", "width", '100.01%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect4": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1.00)','300','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text3Copy16',
      text: 'Gannett',
      rect: ['0.5%','0px','99.6%','39px','auto','auto'],
      userClass: 'effect4'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy16}": [
            ["style", "top", '0px'],
            ["style", "font-size", '36px'],
            ["color", "color", 'rgba(236,240,241,1.00)'],
            ["style", "height", '39px'],
            ["style", "left", '0.01%'],
            ["style", "width", '100.01%']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '123px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['0.5%','0px','99.6%','39px','auto','auto'],
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1.00)','300','none','normal'],
      align: 'center',
      id: 'Text3Copy12',
      text: 'Gannett',
      userClass: 'effect3',
      tag: 'h2'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy12}": [
            ["style", "top", '0px'],
            ["style", "width", '100.01%'],
            ["color", "color", 'rgba(236,240,241,1.00)'],
            ["style", "height", '39px'],
            ["style", "left", '0.01%'],
            ["style", "font-size", '36px']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '123px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['0.3%','0px','99.6%','39px','auto','auto'],
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1.00)','300','none','normal'],
      align: 'center',
      id: 'Text3Copy2',
      text: 'Gannett',
      userClass: 'effect2',
      tag: 'h1'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '123px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '0px'],
            ["style", "font-size", '36px'],
            ["color", "color", 'rgba(236,240,241,1.00)'],
            ["style", "height", '39px'],
            ["style", "left", '0.01%'],
            ["style", "width", '100.01%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['0%','0px','100%','47px','auto','auto'],
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1.00)','300','none','normal'],
      align: 'center',
      id: 'Text3',
      text: 'Gannett',
      userClass: 'effect1',
      tag: 'p'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '0px'],
            ["style", "font-size", '36px'],
            ["color", "color", 'rgba(236,240,241,1.00)'],
            ["style", "height", '47px'],
            ["style", "left", '0%'],
            ["style", "width", '100.01%']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '148px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect6": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1)','300','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2Copy',
      text: 'Gannett',
      rect: ['0px','0px','156px','47px','auto','auto'],
      userClass: 'effect6'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '47px'],
            ["style", "left", '0px'],
            ["style", "width", '156px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '156px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect7": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1)','300','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'Gannett',
      rect: ['0px','0px','194px','41px','auto','auto'],
      userClass: 'effect7'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "height", '41px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${symbolSelector}": [
            ["style", "height", '41px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect8": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(67,86,91,1.00)','300','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2Copy7',
      text: 'Gannett',
      rect: ['0px','0px','194px','41px','auto','auto'],
      userClass: 'effect8'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy7}": [
            ["style", "top", '0px'],
            ["style", "height", '41px'],
            ["color", "color", 'rgba(67,86,91,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${symbolSelector}": [
            ["style", "height", '41px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"effect9": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['source-sans-pro, sans-serif',36,'rgba(236,240,241,1)','300','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2Copy11',
      text: 'Gannett',
      rect: ['0px','0px','194px','41px','auto','auto'],
      userClass: 'effect9'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '41px'],
            ["style", "width", '194px']
         ],
         "${_Text2Copy11}": [
            ["style", "top", '0px'],
            ["style", "height", '41px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-274924497");
