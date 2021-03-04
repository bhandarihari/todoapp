import moment from 'moment';

export const formateDate = (date,format='ddd YYYY/MM/DD')=>{
    if(!date) return ;
    return moment().format(format)
}
