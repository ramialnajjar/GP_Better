




import 'package:account/Repository/color.dart';
import 'package:account/Widgets/filter/filterType.dart';
import 'package:account/Widgets/fiter.dart';
import 'package:flutter/material.dart';

 myAppBar(BuildContext context,title,visible,int space){
  return
  PreferredSize(
      preferredSize: const Size.fromHeight(45.0),
     child: AppBar(
      elevation: 0,
      backgroundColor: Colors.white,
      leadingWidth: double.infinity,
      leading: SizedBox(
          width:double.infinity,
          //height:10,
         
          child: Row(
            //mainAxisAlignment: MainAxisAlignment.start,
             
            children: [
            IconButton(onPressed:() { 
            }, icon:const Icon(Icons.notifications_none_outlined,color:AppColor.textTitle,size: 30,),),       
            
             SizedBox(width: MediaQuery.of(context).padding.right+space),
            Visibility(
              visible:visible,
              child: Padding(
                padding: const EdgeInsets.only(bottom:8.0,left: 15),
                child: IconButton(onPressed:() {
                  showDialog(
              context: context,
              builder: (BuildContext context) => const FilterPopup(),
            );
                },
                 icon:const Icon(Icons.filter_alt_sharp,color:AppColor.main,size: 20,),
                ),
              ),
            ),
          
             Text(title,textDirection:TextDirection.rtl,style:TextStyle(color: AppColor.textTitle,fontSize: 19,fontFamily:'DroidArabicKufi',)),
         
            ],),),
     ),);
}