import request from "@/global/request/axios";
import API from "@/global/request/api";

const staff = {
  list: function(){
    return request.get(API.staff);
  },
  single: function(id){
    return request.get(API.staffItem(id))
  },
  insert: function(params){
    return request.post(API.staff,params);
  },
  update: function(id,params){
    return request.put(API.staffItem(id),params)
  },
  delete:function(id){
    return request.delete(API.staffItem(id))
  }
}

export default staff;