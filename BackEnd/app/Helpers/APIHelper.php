<?php 



namespace App\Helpers;
class APIHelper{

    public static function createAPIresponse($is_error,$code,$message,$data){
        $result=[];
        if($is_error){
            
            $result['success']=false;
            $result['code']=$code;
            $result['message']=$message;
            




        }else{
            $result['success']=true;
            $result['code']=$code;
                if($data==null){
                    $result['message']=$message;

                }else{


               $result['data']=$data;
                }
                            return $result;
        }

    }













}