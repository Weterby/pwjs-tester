function compose(...func){
    func=func.reverse();
    return  function (a) {
        for(let i=0;i<func.length;i++) a=func[i](a);
        return a;
    }
}