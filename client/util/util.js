
module.exports = {

  obj2query(data){
    var query = '';
    if( !data ) return query;
    for( var i in data ){
      query += `${i}=${encodeURIComponent(data[i])}&`
    }
    return query.replace(/&$/, '');
  },
  
}
