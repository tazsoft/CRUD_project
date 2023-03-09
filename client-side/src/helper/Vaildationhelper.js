import cogoToast from 'cogo-toast';

class VaildetorHelper{
    isempty(value){
        if (value.length===0) {
            return true
        }else{
            return false
        }
    }

    Successtoast(msg){
        cogoToast.success(msg)
    }
    Warningtoast(msg){
        cogoToast.error(msg)
    }
}

export const {isempty,Successtoast,Warningtoast}=new VaildetorHelper();