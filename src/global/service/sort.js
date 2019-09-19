import request from "@/global/request/axios";
import API from "@/global/request/api";

const sort = {
  list: function(){
    return request.get(API.sort);
  },
  single: function(id){
    return request.get(API.sortItem(id))
  },
  insert: function(params){
    return request.post(API.sort,params);
  },
  update: function(id,params){
    return request.put(API.sortItem(id),params)
  },
  delete:function(id){
    return request.delete(API.sortItem(id))
  },
  index:function(id){
    return request.get(API.indexItem(id))
  }
}

export default sort;