function checknumberslist(list1,list2){
    for (i=0;i<list2.length;i++){
        if (list1[i]%2==0 && list2[i]%2==0){ 
            console.log("Dono even hai")
        }else{
            console.log("Dono even nahi hai")
        }
    }
}
checknumberslist([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])
