import React from "react";
import Navbar from "../components/Navbar/Navbar";

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center font-bold pt-[120px] text-4xl">Blogs</h1>
        {/* <div className="flex gap-5 justify-center mb-5 ">
        <button className="btn w-46 mt-10 rounded-full hover:text-themeColor text-white border-0 bg-themeColor border-none">
          Getting Pregnant
        </button>
        <button className="btn w-46 mt-10 rounded-full hover:text-themeColor text-white border-0 bg-themeColor border-none">
          Breastfeeding
        </button>
        <button className="btn w-46 mt-10 rounded-full hover:text-themeColor text-white border-0 bg-themeColor border-none">
          Age & Stages
        </button>
      </div> */}
        <section className="blogs">
          <div className="w-42 mx-32 border-1 rounded-lg p-10 shadow-lg">
            <h1 className="font-bold text-2xl text-themeColor">
              Hospital Lists
            </h1>
            <p className="mt-5">
              Academy Private Hospital Address: 335 Lower Kyee Myin Daing Road ,
              Htar Nar Ward , Yangon , Myanmar (Burma). Tel: +95 1 229 746
            </p>
            {/* The button to open modal */}
            <label
              htmlFor="hospital"
              className="btn rounded-full mt-10 hover:text-themeColor text-white border-0 bg-themeColor border-none"
            >
              Read this blog
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="hospital" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Myanmar (Yangon) Hospital</h3>
                <p className="py-4">
                  <div className="mt-5">
                    <h2 className="font-bold">Academy Private Hospital</h2>
                    Address: 335 Lower Kyee Myin Daing Road , Htar Nar Ward ,
                    Yangon , Myanmar (Burma).
                    <span>Tel: +95 1 229 746</span>
                  </div>

                  <div className="mt-5">
                    <h2 className="font-bold">Ar Yu International Hospital</h2>
                    Address: 400 Kyaik Ka San Rd., Tamwe Township , Yangon ,
                    Myanmar (Burma).
                    <span>Tel: +95 976 2341877</span>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-bold">
                      Asia Pacific Centre for Medical and Dental Care
                    </h2>
                    Address: 98A Kaba Aye Pagoda Rd, Bahan Township , Yangon ,
                    Myanmar (Burma).
                    <span>Tel: +951 553 783</span>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-bold">
                      Australian Embassy Health Clinic
                    </h2>
                    Address: 62 U Wisara Road , Dagon Tsp , Yangon , Myanmar
                    (Burma).
                    <span>Tel: +95 1 531342</span>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-bold">
                      Grand Hantha International Hospital
                    </h2>
                    Address: No. 3, Corner of Nar Nat Taw Street , and Kyee
                    Myindaing Kanner Road, , Kamaryut Township , Yangon N/A ,
                    Myanmar (Burma).
                    <span>Tel: +951 523 000</span>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-bold">Home Medicare Service Clinic</h2>
                    Address: No. 30 Shwe Taung Tan Street , Lanmadaw Township ,
                    Yangon , Myanmar (Burma).
                    <span>Tel: +95 1 225791</span>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-bold">Leo Medicare</h2>
                    Address: No. 68, Taw Win Street, 9 Mile , Yangon , Myanmar
                    (Burma).
                    <span>Tel: +(95)9 977809084</span>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-bold">Parami General Hospital</h2>
                    Address: No. 60 - G1, New Parami Road , Yangon , Myanmar
                    (Burma).
                    <span>Tel: +959 795 587 560</span>
                  </div>
                </p>
                <div className="modal-action">
                  <label htmlFor="hospital" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-42 mx-32 border-1 mt-10 rounded-lg p-10 shadow-lg">
            <h1 className="font-bold text-2xl text-themeColor">Birth Plans</h1>
            <p className="mt-5">
              ‘Do I know how to birth my baby’? That’s really the question all
              pregnant women ask of themselves. As a woman, I’ll tell you I
              certainly wondered when I was pregnant for the first time.
              Happily, I gave birth when there was a societal expectation that
              all pregnant families learn birth and birth skills … Lamaze or The
              Bradley Method. Even with these skills, I still didn’t feel I knew
              how to birth my first child. Twelve years later I had worked with
              hundreds of families and developed Birthing Better online birth
              classes that are full of great birth skills. Finally, I knew
              exactly how to birth my last child.
            </p>
            {/* The button to open modal */}
            <label
              htmlFor="Birth"
              className="btn rounded-full mt-10 hover:text-themeColor text-white border-0 bg-themeColor border-none"
            >
              Read this blog
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Birth" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Birth Plans</h3>
                <img src="src/images/birthBlog.jpg" alt="" />
                <p className="py-4">
                  ‘Do I know how to birth my baby’? That’s really the question
                  all pregnant women ask of themselves. As a woman, I’ll tell
                  you I certainly wondered when I was pregnant for the first
                  time. Happily, I gave birth when there was a societal
                  expectation that all pregnant families learn birth and birth
                  skills … Lamaze or The Bradley Method. Even with these skills,
                  I still didn’t feel I knew how to birth my first child. Twelve
                  years later I had worked with hundreds of families and
                  developed Birthing Better online birth classes that are full
                  of great birth skills. Finally, I knew exactly how to birth my
                  last child. When Birthing Better families developed these
                  skills they did so in response to trying to answer that
                  original question … ‘Do I know how to birth my baby?’ (woman)
                  or ‘Do I really know how to help my partner?’ (father/other)
                  Everyone wants to know how to birth their baby no matter where
                  they birth, with whom they birth and no matter what is
                  happening to or around them. Sure there’s a focus on ‘natural
                  birth’ but Birthing Better Childbirth Preparation skills are
                  for ALL births without exceptions! As pregnant women, we have
                  a huge urge to know how to birth our baby. You want to know.
                  Your partner wants to know how to help you birth your baby.
                  What do you need to know to birth your baby? First you, like
                  100% of pregnant women, will have one of the 3 types of
                  births. Labour and then a vaginal delivery. Labour and then an
                  ‘emergency, unplanned or unexpected Caesarean’. A non-laboring
                  planned or elective Caesarean. And then there’s a VBAC …
                  vaginal delivery after a previous Caesarean. You will still
                  end up with one of the above three births. This means you need
                  to know how to birth your baby no matter what type of birth
                  you and your baby experience. This is what you and every other
                  woman need to know It’s quite simple … every birth is an
                  activity. You have to do it. If you want to learn how-to birth
                  your baby well then learn birth and birth-coaching skills.
                  First do this Learn really effective skills to prepare your
                  pregnant body to become a birthing body. Just doing this over
                  the last 16 weeks or so will give you the confidence to know
                  that you can birth your baby with confidence. Your partner
                  shares the exact same body so learning together is fun and
                  will give you lots of WOW moments. You’ll feel WOW about how
                  similar our human body is. You’ll feel WOW because you’ll feel
                  these skills in your body and realize how essential it is to
                  open up, create space and stay soft inside to help your
                  3-dimensional baby out of your birthing body. WOW! Next do
                  this This concept is straight forward. Birth begins, has a
                  middle and ends. Every moment of that time can be filled with
                  wonderful skills that you and your partner use together to
                  birth your baby. Wow! How neat is that? Birthing Better
                  Childbirth Preparation skills are a complete method, full of
                  the very best skills to work through your baby’s birth
                  journey. Preparing your pregnant body to give birth and having
                  skills to work through the activity of giving birth is a one,
                  two steps toward an incredibly powerful, positive and
                  empowering birth experience. How can I use these skills in all
                  3 births? What a great question! Let’s look at each of the 3
                  types of births. Labor and vaginal birth Skills can be used in
                  any labour! It may matter to you whether you have or don’t
                  have medical care, interventions but using skills works
                  whether you have no, little or heaps of medical care. Being a
                  skilled laboring woman and skilled coaching father/other means
                  you can cope, manage, work with and deal with labor
                  contractions all the way from the beginning of labour, through
                  the hard and painful contractions and through the birth of
                  your baby. You’re much less likely to experience trauma, feel
                  out of control or overwhelmed or end up with a delayed 1st
                  stage of labor. By preparing your baby’s birth canal means
                  your body and baby are much less likely to experience trauma
                  or delay in 2nd stage or delivery. If you’re planning to labor
                  and have a vaginal birth then learn skills so you can birth
                  your baby with confidence in a conscious manner. This concept
                  is not rocket science but no one is telling you you need
                  skills. Can skills prevent interventions you might not want?
                  Sure. Many interventions come when women don’t cope well with
                  painful contractions or delays in 1st and 2nd stages. The more
                  skilled you are, the more likely you can birth your baby with
                  no or few interventions. Can skills work with lots of medical
                  interventions? Sure. Why would any medical care stop you from
                  using skills? No birth provider will stop you from using great
                  breathing and relaxation skills. No birth provider will stop
                  your partner from helping you skillfully work through the
                  labor and birth with and around all the medical care. You
                  don’t have to see medical care as ‘interventions’. You can
                  just use their common words: medical assessments, monitoring,
                  and procedures. Bottom line for labor and vaginal birth: Use
                  skills! Labor and emergency Caesarean The first thing you need
                  to know is that if you prepare your body to become a birthing
                  body that you might prevent that emergency Caesarean. Why?
                  Because many of them are done because of delayed labors. The
                  second thing you need to know is that if you learn birth and
                  birth coaching skills then you’ll handle labor better and may
                  be able to avoid that emergency Caesarean. Why? Because many
                  cesareans are done because women don’t have the skills to cope
                  with the natural occurring pain of contractions. So prepare
                  your pregnant body to become a birthing body and learn
                  birth/birth coaching skills so you can cope and manage the
                  natural occurring pain of contractions with and around all
                  forms of medical care. If there is a reason you end up with an
                  emergency Caesarean just continue to use your skills while
                  being prepped and during surgery. Bottom line for labour and
                  unplanned cesarean: No matter how your baby is born, you can
                  use your skills to stay connected, focused and participating
                  in your baby’s birth. Non-labouring Caesarean Most pregnant
                  women who are planning, facing, need, want or pressured to
                  have a non-labouring Caesarean wonder how, why and if there is
                  anything they can, should, could do to prepare for a Cesarean.
                  Birthing Better families come in all forms … that means
                  Birthing Better families had all sorts of births within these
                  3 types. Because families developed Birthing Better skills,
                  they did so for one reason … they wanted to participate in
                  their baby’s birth. This is how families prepared for their
                  coming non-laboring Caesarean. They loved preparing their
                  pregnant body to become a birthing body. They realized that
                  they mentally knew they would have a surgical birth but their
                  pregnant body is just preparing to labor and have a vaginal
                  birth. This means all the hormones and changes are just the
                  same so are all the emotions. Just enjoy preparing for your
                  baby’s birth. You’ll love preparing your body, getting closer
                  together, having giggles while you learn and feel closer to
                  your baby. They loved learning the birth and birth coaching
                  skills because they used their skills on the way to hospital
                  (that’s labor), while being prepped (that’s transition) and
                  during surgery (that’s the birth). Bottom line for elective or
                  planned Cesarean: It’s simple really. You birth your baby no
                  matter what. Skills give you the ability to stay fully
                  involved, help you relax, reduce anxiety, keep you calm and
                  working together throughout your journey through your
                  non-laboring Caesarean. VBAC You’re the group that needs the
                  most boot up your bum! Whatever the reason for your Caesarean,
                  you are planning and hoping to achieve a vaginal birth after a
                  previous caesarean. Think about it. YOU HAVE TO GET THROUGH
                  THE LABOR TO GET TO THE VAGINAL PART. Using the phrase VBAC
                  focuses too much on the vaginal part and not the work you have
                  to do to get there. 99.9% of all Caesareans are done during
                  the labour part and not the vaginal part! Yours was one of
                  that 99.9 % in all likelihood. Many Birthing Better families
                  were in your situation and it is because of them Birthing
                  Better developed with such a depth and breadth of skills. And
                  they absolutely know how essential it is to prepare your
                  pregnant body to birth your baby. What do Birthing Better
                  families say? Simple … usually those ‘non-essential’
                  Caesareans occurred because women did not cope well with labor
                  and they had a delay in the 1st stage! This can be prevented
                  by preparing your body to open up, create and soften inside
                  your 3-dimensional body to let out a 3-dimensional baby! And
                  if you’re entirely focused on ‘choice’ then think about this.
                  You may not have choices but you can always have skills. Your
                  choices may change but you’ll always have skills. The
                  unexpected might happen but you’ll always have skills. Bottom
                  line for VBAC: Your skills can have a HUGE, POSITIVE impact on
                  your ability to achieve a labor and then a vaginal birth!
                </p>
                <div className="modal-action">
                  <label htmlFor="Birth" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-42 mx-32 border-1 mt-10 rounded-lg p-10 shadow-lg">
            <h1 className="font-bold text-2xl text-themeColor">
              Having My First Baby
            </h1>
            <p className="mt-5">
              Our New Zealand Minister of Health gave a talk at the New Zealand
              Midwifery Conference (91.2% of ALL expectant parents have a
              midwife). This was his first statement: ‘The birth of a child is
              the most important event in life’. That is the Truth. The birth of
              your first baby is the most important event in your life. While
              the.....
            </p>
            {/* The button to open modal */}
            <label
              htmlFor="first-boy"
              className="btn rounded-full mt-10 hover:text-themeColor text-white border-0 bg-themeColor border-none"
            >
              Read this blog
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="first-boy" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Having My First Baby</h3>
                <img src="src/images/firstBoy.jpg" alt="" />
                <p className="py-4">
                  Our New Zealand Minister of Health gave a talk at the New
                  Zealand Midwifery Conference (91.2% of ALL expectant parents
                  have a midwife). This was his first statement: ‘The birth of a
                  child is the most important event in life’. That is the Truth.
                  The birth of your first baby is the most important event in
                  your life. While the first pregnancy is important, The Birth
                  is perceived as much more important. Yes, most women remember
                  something of their nine months of pregnancy but you will
                  remember The Birth of your first baby in a more profound way.
                  Not many things in Life are so dynamic and full of the unknown
                  and also full of everyone’s opinion. You’re having your first
                  baby and Birthing Better families want to share with you all
                  the skills they developed and our New Zealand not-for-profit
                  Trust has put into a simple to use Birthing Better Childbirth
                  Preparation Online Course. We want to talk to you about how to
                  prepare for your first baby. You can be having your first baby
                  at 40 or 15. You might ultimately give birth at home or
                  hospital. But you share the same thing. You will give birth to
                  your first baby not too many months from right now. Once
                  you’ve gotten past the first 3 months of pregnancy (conception
                  to 12 weeks), moved through the 2nd trimester (12-24 weeks),
                  you begin to think about ‘The Birth’ and you are probably
                  doing some research about the possibilities.
                </p>
                <div className="modal-action">
                  <label htmlFor="first-boy" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-42 mx-32 border-1 mt-10 rounded-lg p-10 shadow-lg">
            <h1 className="font-bold text-2xl text-themeColor">
              Pain Relief In Childbirth
            </h1>
            <p className="mt-5">
              There is a strong message in childbirth right now … ‘You should
              have a natural birth’. You’re not only given the message that
              using pain relief will prevent you from having a natural birth and
              therefore a positive or empowered birth. You’re told that your
              baby is put at risk by medical interventions …
            </p>
            {/* The button to open modal */}
            <label
              htmlFor="pain"
              className="btn rounded-full mt-10 hover:text-themeColor text-white border-0 bg-themeColor border-none"
            >
              Read this blog
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="pain" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Pain Relief In Childbirth</h3>
                <img src="src/images/pain.jpg" alt="" />
                <p className="py-4">
                  There is a strong message in childbirth right now … ‘You
                  should have a natural birth’. You’re not only given the
                  message that using pain relief will prevent you from having a
                  natural birth and therefore a positive or empowered birth.
                  You’re told that your baby is put at risk by medical
                  interventions … such as medical pain relief. Once you use an
                  epidural, gas or pethidine in childbirth, you’re a failure …
                  right? Nonsense … childbirth pain HURTS and many of us feel we
                  need pain relief. Even when you use gas, have pethidine or an
                  epidural you can still use your Birthing Better childbirth
                  skills to manage the pain during contractions. The long and
                  short of this post is simple. Some Birthing Better families
                  used pain relief in childbirth and still used their Birthing
                  Better skills. They just separated these two issues. They used
                  their Birthing Better birth and birth-coaching skills because
                  doing so helped them stay more involved and engaged in their
                  baby’s birth. The other issue was simple … if the pain got
                  overwhelming even when using skills then they wanted some
                  relief from the natural occurring pain in childbirth. That’s
                  fine. You can use breathing and relaxation skills from
                  Birthing Better Childbirth Preparation Online Course to help
                  manage your childbirth pain. You can also use these important
                  childbirth skills: Learn how to stay open inside your
                  pregnant/birthing pelvis Discover the secret of coping with
                  labour pain Prepare your birth canal to prevent birth trauma
                  And don’t forget these birth skills: How to work as a team
                  with your birth coach. How to work alongside all the
                  childbirth assessments, monitoring, and procedures
                </p>
                <div className="modal-action">
                  <label htmlFor="pain" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-42 mx-32 border-1 mt-10 rounded-lg p-10 shadow-lg">
            <h1 className="font-bold text-2xl text-themeColor">
              Unexpected Happens In Childbirth
            </h1>
            <p className="mt-5">
              YES! There is no way to know what your birth will be like. Most
              likely your birth will be nothing like you expect. Use Birthing
              Better skills to feel in control of the unexpected.
            </p>
            {/* The button to open modal */}
            <label
              htmlFor="Unexpected"
              className="btn rounded-full mt-10 hover:text-themeColor text-white border-0 bg-themeColor border-none"
            >
              Read this blog
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Unexpected" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Unexpected Happens In Childbirth
                </h3>
                <img src="src/images/unexpected.jpg" alt="" />
                <p className="py-4">
                  The reality is very simple about childbirth. There’s no way to
                  know what your birth will be like. This means you cannot
                  really ‘plan’ the birth you want. You can think about how
                  you’d like your birth to be. This means with all your hopes
                  and plans the unexpected does happen in childbirth. Women know
                  this in their bones. We think about this so it’s a great idea
                  to discuss with your obstetrician or midwife through your
                  Birth Plan what types of medical care you’re comfortable with
                  or not in case the unexpected happens in your birth. But these
                  Birth Plans are primarily focused on the birth you want. Birth
                  Plans have been advocated since the early 1980s but a huge
                  percent of them fail. They fail because of this internal
                  conflict in each woman. We envision the birth we want. We
                  don’t want the unexpected to happen. We don’t know how to deal
                  with that so we put our hopes into planning or choosing our
                  birth but we can’t. In other words, most births are unlike
                  anything you imagine. All the time women say: ‘My birth wasn’t
                  anything like I imagined’. Sometimes we hear women say ‘I’ll
                  hope for the best and plan for the worst’. You are likely to
                  deal with the unexpected. What is unexpected doesn’t mean bad,
                  it can be good. For example, if you labor you might find the
                  natural occurring pain of contractions is very manageable
                  throughout even though you had been terrified that the pain
                  would be horrible. Or you might be going to a hospital that
                  you’ve heard terrible things about and been pleasantly
                  surprised. Childbirth and the unexpected go hand-in-hand
                  because there’s no way to know what your birth will be like.
                  Knowing that the unexpected is most likely to be part of your
                  birth then what? If you really can’t plan your birth even
                  though you can express your wants and don’t want, are you
                  helpless without any power? Is childbirth all hopeless and are
                  you forced to be passive? This is why, how and what Birthing
                  Better families sorted out. They created skills! These skills
                  were developed to prepare for birth and how to manage birth no
                  matter where the birth occurred, who was present or what was
                  happening in real Time, not hoped-for plans. That’s right …
                  Birthing Better families used their skills as their birth
                  unfolded. This is so important.
                </p>
                <div className="modal-action">
                  <label htmlFor="Unexpected" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default BlogsPage;
