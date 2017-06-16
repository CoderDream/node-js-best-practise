/**
 * Created by Admin on 2017/6/9.
 */
function isEmptyObject(e) {
  var t;
  for (t in e) {
    return !1;
  }
  return !0
}

function isObject(e){
  return e && e.constructor==Object;
}


describe("SAMPLE unit test", function () {
// #1 should return home page
  it("should return home page", function (done) {
    if(isObject()){
      console.log("----------------------------------------------");
    }
    console.log(isObject());           //true
    console.log(isObject({}));         //true
    console.log(isObject(null));       //true
    if(isObject(['aa'])){
      console.log("-----------------####-----------------------");
    }
    console.log(isObject(23));         //true
    console.log(isObject(true));         //true
    console.log(isObject(false));         //true
    console.log(isObject(0));         //true
    console.log("6\t" +isObject("B-26026"));         //true
    console.log(isObject({"te": 2}));      //false
    console.log(isObject({"te": 2, "ab": {"a": "b"}}));      //false
    console.log(isObject({"te": 2, "ab": {"a": true}}));      //false
    console.log(isObject({"te": 2, "ab": {"a": 22}}));      //false

    /*
    console.log(isEmptyObject());           //true
    console.log(isEmptyObject({}));         //true
    console.log(isEmptyObject(null));       //true
    console.log(isEmptyObject(23));         //true
    console.log(isEmptyObject("B-26026"));         //false
    console.log(isEmptyObject({"te": 2}));      //false
    console.log(isEmptyObject({"te": 2, "ab": {"a": "b"}}));      //false
    console.log(isEmptyObject({"te": 2, "ab": {"a": true}}));      //false
    console.log(isEmptyObject({"te": 2, "ab": {"a": 22}}));      //false*/
    done();
  });
});

/*
describe("SAMPLE unit test2", function () {
// #1 should return home page
  it("should return home page", function (done) {
    console.log(isEmptyObject());           //true
    var sql = "";
    //let where = {"WorkID": "B-26026"};
    // let where = {"WorkID": "B-26026"};
    //let where = {"WorkDate": {"gt":"2017-06-01"}};
    let where = {"WorkID": "B-26026", "age":26, "IsLock": false, "WorkDate": {"gt": new Date(2017,6, 1)}};


    // var json1 = {"name":"sojson 在线工具"};
    //
    // if(typeof json1 == 'object'){
    //   console.log("这是JSON对象");
    // }
    // var json2 = '{"name":"sojson 在线工具"}';
    // if(typeof json2 == 'string'){
    //   console.log("这是字符串");
    // }

    if (!isEmptyObject(where)) {
      for (let index in where) {
        //request.input(index, where[index]);
        console.log("where[index]\t" + where[index]);
        var valueObj = where[index];
        if (typeof valueObj != 'object') {
          sql += " AND " + index + "=@" + index;
        } else {
          console.log("###object\t" + valueObj);
          for (let index2 in valueObj) {
            sql += " AND " + index2 + "=@" + valueObj[index2];
          }
        }
      }
    }
    console.log("sql\t" + sql);           //true
    done();
  });
});
  */