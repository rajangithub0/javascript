const circle={
    radius:2.2,
    area:function(){
        return Math.PI * this.radius * this.radius;
    },
    cir:function(){
        return 2 * Math.PI *this.radius
    }
}

console.log(`area is`,circle.area());
console.log(`cir is`,circle.cir());