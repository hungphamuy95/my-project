export const iterator = (a, n)=>{
    let current = 0,
        l = a.length;
    return () => {
        end = current + n;
        const part = a.slice(current,end);
        current =  end < l ? end : 0;
        return part;
    };
}