import 'package:account/Repository/color.dart';
import 'package:account/Widgets/likeButton.dart';
import 'package:account/Widgets/text.dart';
import 'package:flutter/material.dart';
import 'package:readmore/readmore.dart';

Widget ComplaintCard(BuildContext context,  
{
required String dtmDateCreated,
required String strComplaintTypeEn,
required String strComment,
required int intVotersCount,
required String strStatus,
required String strUserName,
required var address,
required var intComplaintId,



}) {
  return
   Padding(
    padding: const EdgeInsets.only(top:10.0,),
    child: Expanded(
      child: Container(
        width: double.infinity,
        height: 470,
              decoration: BoxDecoration(
                color: const Color(0xffffffff),
                borderRadius: BorderRadius.circular(1.0),
                boxShadow: const [
                  BoxShadow(
                    color: Color.fromARGB(255, 255, 241, 241),
                    offset: Offset(0, 0),
                    blurRadius: 5,
                  ),
                ],
              ),
            child:
      
      Padding(
        padding: const EdgeInsets.only(bottom: 10.0),
        child: Column(
         
          //mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            // Card
          Padding(
            padding: const EdgeInsets.only(left:10.0,right: 10),
            child: Row(children: [
            //status container    
            Padding(
             padding: const EdgeInsets.all(10.0),
             child: Container(
              
             height: 20,
            // width: 67,
             decoration: BoxDecoration(
              color: const Color(0xffffffff),
              borderRadius: BorderRadius.circular(15.0),
              boxShadow: const [
              BoxShadow(
              color: Color.fromARGB(255, 223, 222, 222),
              offset: Offset(0, 0),
              blurRadius: 2,
              spreadRadius: 0.5,
            ),
                ],
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 2.0),
                child: Row(
            mainAxisSize: MainAxisSize.max,
            children: [
              text(
                "موافق عليه",
                AppColor.secondary,
              ),
              const Icon(Icons.circle, color: AppColor.secondary, size: 10),
            ],
                ),
              ),
            ),
          ),
                const Spacer(),
                Column(
                  children: [
                    Text( 
                        strUserName,
                        textDirection: TextDirection.rtl,
                        style:const  TextStyle(
                          fontFamily: 'Euclid Circular A',
                          fontSize: 13,
                          color:AppColor.secondary,
                          fontWeight: FontWeight.w700,
                        ),
                        softWrap: false,
                      ),
                  ],
                ),
         
            ],),
            
          ) ,  
                     //time 
       
          const Padding(
            padding: EdgeInsets.only(right:10.0),
            child: Text('قبل 5 ساعات',style:TextStyle( color: Color(0xff92a5c6),fontSize: 11)),
          ),
      
         
          //description    
                Padding(
                  padding: const EdgeInsets.only(right:10.0,left: 10),
                  child:  ReadMoreText(
                   strComment=="" ? strComment : 
                   "أرجو من الجهات المختصة النظر في وضع الشوارع وإصلاح الحفر بأسرع وقت ممكن، حيث أن وجود هذه الحفر يشكل خطراً على المركبات والمارة. نأمل توفير السلامة والراحة للجميع والعمل على تحسين حالة الطرق في المنطقة. شكراً لتفهمكم وتعاونكم.",
                   trimLines: 2,
                   colorClickableText: Colors.grey,
                   textDirection: TextDirection.rtl,
                  trimMode: TrimMode.Line,
                  trimCollapsedText: 'اقرأ المزيد',
                  trimExpandedText: 'الرجوع',
                  moreStyle: const 
                  TextStyle( fontFamily:'DroidArabicKufi',
                         fontWeight: FontWeight.w300,
                         fontSize: 10,
                         color: Colors.grey,),
                          style:  TextStyle(
                         fontFamily:'DroidArabicKufi',
                         fontWeight: FontWeight.w300,
                         fontSize: 10,
                         color:AppColor.textBlue
                       ),
                     
                              
                  ),
                  
    
                ),
      
          // Photo
            SizedBox(height: 10,),
            Container(
             height: 300.0,
    
             child: Image.asset('assets/icons/pothole.jpg',fit:BoxFit.cover,),
            ),
    
              Padding(
                padding: const EdgeInsets.all(2.0),
                child: Expanded(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                    
                  // address
                    Text(
                      address,
                      textDirection: TextDirection.rtl,
                      style: const TextStyle(
                        fontFamily:'DroidArabicKufi',
                        fontSize: 10,
                        color: AppColor.secondary,
                        fontWeight: FontWeight.bold,
                      ),
                      softWrap: false,
                    ),
                         
                   //const SizedBox(width:,),
                   const Spacer(),
                   vote(intVotersCount,intComplaintId),
                   SizedBox(width: 35,child: countVotes(intVotersCount)),
                   downVote(intVotersCount,intComplaintId),
                   Container( width: 1, color: Colors.grey,height: 25, ),
                   IconButton(onPressed: (){}, icon: Icon(Icons.bookmark_outline_sharp,size: 30,color:Colors.grey,),)
                 
                   
                    //   // date
                    //    Align(
                    //     alignment: Alignment.bottomRight,
                    //     child: Text(
                    //       dtmDateCreated.toString().substring(0,10),
                    //       style: const TextStyle(
                    //         fontFamily: 'Euclid Circular A',
                    //         fontSize: 10,
                    //         color: Color(0xff92a5c6),
                    //         fontWeight: FontWeight.bold,
                    //       ),
                    //       softWrap: false,
                    //     ),),
                    // const SizedBox(width: 40,),
                    //   //time
                    //    Align(
                    //           alignment: Alignment.bottomRight,
                    //           child: Text(
                    //              dtmDateCreated.toString().substring(11,17),
                    //             style:const   TextStyle(
                    //               fontFamily: 'Euclid Circular A',
                    //               fontSize: 10,
                    //               color: Color(0xff92a5c6),
                    //                fontWeight: FontWeight.bold,
                    //             ),
                    //             softWrap: false,
                    //           ),
                    //         ),
                  
                         ],),
                ),
              ),
              
                      ],
        ),
      ),
      ),
    ),
  );
}