<?php 



namespace App\Helpers;
class APIHelper{

/*Cette fonction génère les reponses de l'API */
    public static function createAPIresponse($is_error,$code,$message,$data){
        $result=[];
        if($is_error){    // si il y'a un erreur 
            
            $result['success']=false;
            $result['code']=$code;
            $result['message']=$message;
            




        }else{ //sinon on repondre par sucess
        
            $result['success']=true;
            $result['code']=$code;
                if($data==null){ // si il ya pas de data a renvoyer 
                    $result['message']=$message;

                }else{


               $result['data']=$data; // on repondre par un resultat complet!
                }
                            return $result;
        }

    }













}