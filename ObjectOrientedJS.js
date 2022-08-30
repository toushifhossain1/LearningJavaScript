// Without Function raw Object
/* let circle = {
     radius: 1,
    location: {
        x: 10,
        y: 20
    },
    draw: function () {
        //area = parseInt(radius) * 3.14;

    }
}
circle.draw();
*/


// FactoryFunction
function createCircle(radius) {
    return {
        radius,
        length: 5,
        draw: function () {
            console.log("FactoryFunctionPropertyDrawIsWorking");
        }
    }
}

let circle = createCircle(1);
circle.draw();

// 18 mins done https://www.youtube.com/watch?v=PFmuCDHHpwk