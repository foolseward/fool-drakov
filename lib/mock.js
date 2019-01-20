var Mock = require('mockjs');

const isArray= function(obj){
    return Object.prototype.toString.call(obj)=== '[object Array]'; 
}

const isMockKey= function(key){
    return key.indexOf("|")!== -1;                 
}

const isMockVal= function(val){
    return typeof val=== 'string' && val.indexOf("@")=== 0;                  
}

var target;
var parent= [];
var current_key;
var inArray;

const deep= (obj) => {
    if(typeof obj!== 'object'){
        //对mock格式的字符串val做加工
        if(isMockVal(obj)){
            return Mock.mock(obj);
        } 
      return obj;
    }
    let symbol;
    if(isArray(obj)){
        symbol= false;
    }
    if(isArray(obj)){
        symbol= true;
    }
    //如果obj为对象类型，则创建镜像
    make(obj);
    if(symbol){
      inArray= true;  
      for(let i= 0; i< obj.length; i++){ 
        parent[parent.length- 1].push(deep(obj[i]));
      }
      inArray= false;
      return parent.pop();
    } else {
      Object.keys(obj).forEach(key => {
        //console.log(key, target.data, parent);
        current_key= key;
        //如果当前键值是mock, 则通过assign给target添加新属性
        if(isMockKey(key)){
            Object.assign(parent[parent.length- 1], Mock.mock({[key]: obj[key]}));
        }
        //如果当前键值不是mock, 则直接添加新属性
        if(!isMockKey(key)){
            parent[parent.length- 1][key]= deep(obj[key]);
        }
      });
      return parent.pop();
    }
};

/**
 * @description: 只有object才能进入这个方法
 */
const make= function(obj){
    //console.log(obj)
    //当target和current_key都不存在时，初始化
    if(!current_key && !target){
        target= Object.getPrototypeOf(obj).constructor()
        parent.push(target);
    }
    //如果current_key存在，说明进入了对象内，
    if(current_key){
        let newObj= Object.getPrototypeOf(obj).constructor()
        if(!inArray) parent[parent.length- 1][current_key]= newObj;
        parent.push(newObj);
    }
}

module.exports= function mock(data){
    target= null;
    current_key= null;
    deep(data);
    return target;
}