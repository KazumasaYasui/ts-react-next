"use strict";
// function sayHello (firstName: string) {
//   console.log('Hello ' + firstName)
// }
//
// let firstName: string = 'Takuya'
// sayHello(firstName)
//
// // ---
//
// let age: number = 30
// sayHello(age)
//
// // ---
//
// const message = 'Hello!'
//
// message()
//
// // ---
//
// function calc(isSum: boolean) {
//   let a = 100
//   if (isSum) {
//     let b = a + 1
//     return b
//   }
//   return b
// }
//
// // ---
//
// const num: number = 100
// num = 200
//
// // ---
//
// let myNumber: string = '200'
// myNumber = '二百'
// myNumber = 200
//
// // ---
//
// const array: string[] = []
// array.push('Takuya')
// array.push(2)
//
// // ---
//
// const mixedArray = ['foo', 1]
// const mixedArrayU: (string|number)[] = ['foo', 1]
// const mixedArrayT: [string, number] = ['foo', 1]
//
// // ---
//
// const user: { name: string, age: number } = {
//   name: 'Takuya',
//   age: 30
// }
// console.log(user.name)
// console.log(user.age)
//
// // ---
//
// function printName(obj: { firstName: string; lastName?: string }) {
//   console.log(`${obj.firstName} (${obj.lastName || 'Hoge'})`)
// }
//
// printName({ firstName: 'Takuya' })
// printName({ firstName: 'Takuya', lastName: 'Kimura' })
//
// // ---
//
// let userA: any = { firstName: 'Takuya' }
// userA.hello()
// userA()
// userA.age = 100
// userA = 'Hello'
// const n: number = userA
//
// // ---
//
// function sayHello2(name: string): string {
//   return `Hello ${name}`
// }
//
// sayHello2('Takuya')
//
// // ---
//
// function sayHello3(name: string, greeting?: string): string {
//   return `${greeting || 'Hello'} ${name}`
// }
//
// sayHello3('Takuya')
// sayHello3('Takuya', 'Yeah')
//
// // ---
//
// function sayHello4(name: string, greeting: string = 'Hello'): string {
//   return `${greeting} ${name}`
// }
//
// sayHello4('Takuya')
// sayHello4('Takuya', 'Hey')
//
// // ---
//
// function printName2(firstName: string, formatter: (name: string) => string) {
//   console.log(formatter(firstName))
// }
//
// function formatName(name: string): string {
//   return `${name} san`
// }
//
// printName2('Takuya', formatName)
//
// // ---
//
// let sayHello5 = (name: string): string => `Hello ${name}`
//
// sayHello5('Takuya')
//
// // ---
//
// function genBirdsInfo(name: string): string[] {
//   return name.split(',')
// }
//
// function singBirds(birdInfo: (x: string) => string[]): string {
//   return birdInfo('hato, kiji')[0] + ' piyo piyo'
// }
//
// console.log(singBirds(genBirdsInfo))
// console.log(singBirds('dobato'))
//
// // ---
//
// const age2 = 10
// console.log(age2.length)
//
// const user2 = {
//   name: 'Takuya',
//   age: 30
// }
// console.log(user2.length)
//
// function getUser() {
//   return {
//     name: 'Takuya',
//     age: 30
//   }
// }
// const user3 = getUser()
// console.log(user3.age.length)
//
// const names = ['Takuya', 'Yoshiki', 'Taketo']
// names.forEach((name) => {
//   console.log(name.toUppercase())
//   // console.log(name.toUpperCase())
// })
//
// window.confirm = () => {
//   console.log('confirm関数')
//   // return true
// }
//
// // ---
//
// const myCanvas = document.getElementById('main_canvas')
// console.log(myCanvas.width)
//
// const myCanvas2 = document.getElementById('my_canvas_2') as HTMLCanvasElement
// console.log(myCanvas2.width)
//
// // const result = (response as any) as User
//
// const hoge: any = 'test'
// const fuga: number = hoge as number
// console.log(fuga.toFixed(2))
//
// // ---
//
// type Name = string
//
// type Point = {
//   x: number;
//   y: number;
// }
//
// function printPoint(point: Point) {
//   console.log(`x座標は${point.x}です`)
//   console.log(`y座標は${point.y}です`)
// }
//
// printPoint({ x: 100, y: 100 })
// // printPoint({ z: 100, t: 100 })
//
// type Formatter = (a: string) => string
//
// function printName3(firstName: string, formatter: Formatter) {
//   console.log(formatter(firstName))
// }
//
// const formatter: Formatter = (a) => {
//   return a.toUpperCase()
// }
//
// printName3('kazumasa', formatter)
//
// type Label = {
//   [key: string] : string
// }
//
// const labels: Label = {
//   topTitle: 'トップページのタイトルです',
//   topSubTitle: 'トップページのサブタイトルです',
//   topFeature1: 'トップページの機能1です',
//   topFeature2: 'トップページの機能2です',
// }
//
// const hoge2: Label = {
//   message: 100
// }
//
// // ---
//
// interface Point2 {
//   x: number;
//   y: number;
// }
//
// function printPoint2(point: Point2) {
//   console.log(`x座標は${point.x}です`)
//   console.log(`y座標は${point.y}です`)
//   console.log(`z座標は${point.z}です`)
// }
//
// interface Point2 {
//   z: number;
// }
//
// printPoint2({ x: 100, y: 100 })
// printPoint2({ x: 100, y: 100, z: 100 })
//
// class MyPoint2 implements Point2 {
//   x: number;
//   y: number;
// }
//
// new MyPoint2()
//
// interface Point3 {
//   x: number;
//   y: number;
//   z?: number;
// }
//
// class MyPoint3 implements Point3 {
//   x: number;
//   y: number;
// }
//
// new MyPoint3()
//
// interface Colorful {
//   color: string;
// }
//
// interface Circle {
//   radius: number;
// }
//
// interface ColorfulCircle extends Colorful, Circle {}
//
// const cc: ColorfulCircle = {
//   color: '赤',
//   radius: 10
// }
//
// // ---
//
// class MyPoint4 {
//   x: number;
//   y: number;
//
//   constructor(x: number = 0, y: number = 0) {
//     this.x = x
//     this.y = y
//   }
//
//   moveX(n: number): void {
//     this.x += n
//   }
//
//   moveY(n: number): void {
//     this.y += n
//   }
// }
//
// const myPoint4 = new MyPoint4()
// myPoint4.moveX(10)
// myPoint4.moveY(-10)
// console.log(`${myPoint4.x}, ${myPoint4.y}`)
//
// class MyPoint3D extends MyPoint4 {
//   z: number;
//
//   constructor(x: number = 0, y: number = 0, z: number = 0) {
//     super(x, y)
//     this.z = z
//   }
//
//   moveZ(n: number): void {
//     this.z += n
//   }
// }
//
// const myPoint3D = new MyPoint3D()
// myPoint3D.moveX(10)
// myPoint3D.moveY(-10)
// myPoint3D.moveZ(20)
// console.log(`${myPoint3D.x}, ${myPoint3D.y}, ${myPoint3D.z}`)
//
// interface IUser {
//   name: string;
//   age: number;
//
//   sayHello: () => string;
// }
//
// class User implements IUser {
//   name: string;
//   age: number;
//
//   constructor() {
//     this.name = ''
//     this.age = 0
//   }
//
//   sayHello(): string {
//     return `こんにちは、私は${this.name}、${this.age}歳です。`
//   }
// }
//
// const user4 = new User()
// user4.name = 'Takuya'
// user4.age = 36
// console.log(user4.sayHello())
//
// class BasePoint3D {
//   public x: number;
//   private y: number;
//   protected z: number;
// }
//
// const basePoint = new BasePoint3D()
// basePoint.x
// basePoint.y
// basePoint.z
//
// class ChildPoint extends BasePoint3D {
//   constructor() {
//     super()
//     this.x
//     this.y
//     this.z
//   }
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c, _d;
exports.__esModule = true;
// ---
var DirectionNotEnum = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
};
var DirectionNum;
(function (DirectionNum) {
    DirectionNum[DirectionNum["Up"] = 0] = "Up";
    DirectionNum[DirectionNum["Down"] = 1] = "Down";
    DirectionNum[DirectionNum["Left"] = 2] = "Left";
    DirectionNum[DirectionNum["Right"] = 3] = "Right";
})(DirectionNum || (DirectionNum = {}));
var direction = DirectionNum.Left;
console.log(direction);
// direction = 'Left'
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));
var value = 'DOWN';
var enumValue = value;
if (enumValue === DirectionStr.Down) {
    console.log('Down is selected');
}
// ---
var Queue = /** @class */ (function () {
    function Queue() {
        this.array = [];
    }
    Queue.prototype.push = function (item) {
        this.array.push(item);
    };
    Queue.prototype.pop = function () {
        return this.array.shift();
    };
    Queue.prototype.getArray = function () {
        return this.array;
    };
    return Queue;
}());
var queue = new Queue();
queue.push(111);
queue.push(112);
// queue.push('hoge')
queue.pop();
console.log(queue.getArray());
// let str = 'fuga'
// str = queue.pop()
// ---
function printId1(id) {
    console.log(id);
}
printId1(11);
printId1('22');
function printId2(id) {
    console.log(id);
}
printId2(111);
printId2('222');
printId2(undefined);
var id = {
    id: '111',
    name: 'Kazumasa'
};
var contact = {
    name: 'Kazumasa',
    email: 'hoge@example.com',
    phone: '000-1111-2222'
};
console.log(id, contact);
var employee = {
    id: '111',
    name: 'Kazumasa',
    email: 'hoge@example.com',
    phone: '000-1111-2222'
};
// const employeeContact: Employee = {
//   name: 'Kazumasa',
//   email: 'hoge@example.com',
//   phone: '000-1111-2222',
// }
console.log(employee);
// ---
var postStatus;
postStatus = 'draft';
// postStatus = 'drafts'
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare('abc', 'xyz'));
// ---
function error(message) {
    throw new Error(message);
}
function foo(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    return error('Never happens');
}
console.log(foo('1'));
console.log(foo(1));
// console.log(foo([]))
var PageType;
(function (PageType) {
    PageType[PageType["ViewProfile"] = 0] = "ViewProfile";
    PageType[PageType["EditProfile"] = 1] = "EditProfile";
    PageType[PageType["ChangePassword"] = 2] = "ChangePassword";
})(PageType || (PageType = {}));
var getTitleText = function (type) {
    switch (type) {
        case PageType.ViewProfile:
            return 'Setting';
        case PageType.EditProfile:
            return 'Edit Profile';
        case PageType.ChangePassword:
            return 'Change Password';
        default:
            var wrongType = type;
            throw new Error("".concat(wrongType, " is not in PageType"));
    }
};
console.log(getTitleText(0));
console.log(getTitleText(1));
console.log(getTitleText(2));
var user;
user = { name: 'Kazumasa', social: { facebook: true, twitter: true } };
console.log((_a = user.social) === null || _a === void 0 ? void 0 : _a.facebook);
console.log((_b = user.social) === null || _b === void 0 ? void 0 : _b.twitter);
user = { name: 'kazukun' };
console.log((_c = user.social) === null || _c === void 0 ? void 0 : _c.facebook);
console.log((_d = user.social) === null || _d === void 0 ? void 0 : _d.twitter);
// ---
function processUser(user) {
    var s = user.name;
    console.log(s);
}
processUser(user);
// ---
function addOne(value) {
    if (typeof value === 'string') {
        return Number(value) + 1;
    }
    return value + 1;
}
console.log(addOne(10));
console.log(addOne('20'));
// let response = {}
var response = { info: { name: 'kazukun', age: 30 } };
var user2 = response;
if (user2.info) {
    console.log(user2.info.name);
}
var key1 = 'name';
// const key2: UserKey = 'phone'
console.log(key1);
function getProperty(obj, key) {
    return obj[key];
}
var user3 = {
    name: 'Kazumasa',
    age: 30,
    email: 'kazu@example.com'
};
var userName = getProperty(user3, 'name');
var userAge = getProperty(user3, 'age');
var userEmail = getProperty(user3, 'email');
// const userGender = getProperty(user3, 'gender')
console.log(userName, userAge, userEmail);
var versions = {
    102: false,
    103: false,
    104: true
    // 'v105': true,
};
console.log(versions);
var user4 = { name: 'Kazumasa', gender: 'Male' };
// user4.gender = 'Female'
console.log("name: ".concat(user4.name, ", gender: ").concat(user4.gender));
var user5 = { name: 'Kazumasa', gender: 'Male' };
var user5ReadOnly = { name: 'Kazumasa', gender: 'Male' };
user5.name = 'Kazukun';
// user5ReadOnly.name = 'Kazukun'
console.log(user5, user5ReadOnly);
// ---
var x = 123;
var y = 'Hello';
// console.log(x.toFixed(1))
// console.log(y.toLowerCase())
if (typeof x === 'number') {
    console.log(x.toFixed(1));
}
if (typeof y === 'string') {
    console.log(y.toLowerCase());
}
// ---
function fetchFromServer(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({ success: true });
        }, 100);
    });
}
function asyncFunc() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchFromServer('111')];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, "The result: ".concat(result.success)];
            }
        });
    });
}
;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, asyncFunc()];
            case 1:
                result = _a.sent();
                console.log(result);
                return [2 /*return*/];
        }
    });
}); })();
asyncFunc().then(function (result) { return console.log(result); });
// ---
var hello_1 = require("./lib/hello");
(0, hello_1.hello)('Kazumasa');
