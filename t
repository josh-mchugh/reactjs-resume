[1mdiff --git a/index.html b/index.html[m
[1mindex 5602381..5ebefeb 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -10,22 +10,7 @@[m
 <body>[m
     <div class="content">[m
         <div class="content__input">[m
[31m-            <div class="input__section">[m
[31m-                <h3 class="section__header">Your Details</h3>[m
[31m-[m
[31m-                <label for="firstName">First Name</label>[m
[31m-                <input id="firstName" type="text" placeholder="First Name"/>[m
[31m-[m
[31m-                <label for="lastName">Last Name</label>[m
[31m-                <input id="lastName" type="text" placeholder="Last Name"/>[m
[31m-[m
[31m-                <label for="jobTitle">Job Title</label>[m
[31m-                <input id="jobTitle" type="text" placeholder="Job title"/>[m
[31m-[m
[31m-                <label for="summary">Summary</label>[m
[31m-                <input id="summary" type="text" placeholder="Summary"/>[m
[31m-[m
[31m-            </div>[m
[32m+[m[32m            <div id="elmRoot"></div>[m
             <div class="input__section">[m
                 <h4 class="section__header">Contact Details</h4>[m
 [m
[36m@@ -95,7 +80,6 @@[m
                 <label for="location">Location</label>[m
                 <input id="location" text="text" placeholder="Location" />[m
             </div>[m
[31m-            <div id="elmRoot"></div>[m
         </div>[m
         <div class="content__display">[m
             <div class="resume">[m
[1mdiff --git a/src/Main.elm b/src/Main.elm[m
[1mindex 7c9a53b..456b076 100644[m
[1m--- a/src/Main.elm[m
[1m+++ b/src/Main.elm[m
[36m@@ -2,6 +2,7 @@[m [mmodule Main exposing (main)[m
 [m
 import Browser[m
 import Html exposing (..)[m
[32m+[m[32mimport Html.Attributes exposing (class, for, id, placeholder, type_)[m
 [m
 [m
 main : Program () Model Msg[m
[36m@@ -51,4 +52,14 @@[m [msubscriptions model =[m
 [m
 view : Model -> Html Msg[m
 view model =[m
[31m-    text model[m
[32m+[m[32m    div [ class "input__section" ][m
[32m+[m[32m        [ div [ class "section__header" ] [ text "Your Details" ][m
[32m+[m[32m        , label [ for "firstName" ] [ text "First Name" ][m
[32m+[m[32m        , input [ id "firstName", type_ "text", placeholder "First Name" ] [][m
[32m+[m[32m        , label [ for "lastName" ] [ text "Last Name" ][m
[32m+[m[32m        , input [ id "lastName", type_ "text", placeholder "Last Name" ] [][m
[32m+[m[32m        , label [ for "jobTitle" ] [ text "Job Title" ][m
[32m+[m[32m        , input [ id "jobTitle", type_ "text", placeholder "Job Title " ] [][m
[32m+[m[32m        , label [ for "summary" ] [ text "Summary" ][m
[32m+[m[32m        , input [ id "summary", type_ "text", placeholder "Summary" ] [][m
[32m+[m[32m        ][m
