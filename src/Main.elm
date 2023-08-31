port module Main exposing (main)

import Array exposing (..)
import Browser
import Html exposing (..)
import Html.Attributes exposing (class, for, id, placeholder, type_, value, attribute)
import Html.Events exposing (onClick, onInput)



-- MAIN


{-| Main function to generate program for Elm element
-}
main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- PORTS


port updateDisplay : Model -> Cmd msg



-- MODEL


type alias Model =
    { name : String
    , title : String
    , summary : String
    , contact : Contact
    , socials : Array Social
    , experiences : Array Experience
    , skills : List Skill
    , certifications : List Certification
    }


type alias Contact =
    { phone : String
    , email : String
    , location : String
    }


type alias Social =
    { name : String
    , url : String
    }


type alias Experience =
    { title : String
    , name : String
    , duration : String
    , location : String
    , descriptions : List String
    , skills : List String
    }


type alias Skill =
    { name : String
    , proficiency : Int
    }


type alias Certification =
    { title : String
    , organization : String
    , location : String
    , year : String
    }


{-| Init function to initialize application state
-}
init : () -> ( Model, Cmd Msg )
init () =
    ( { name = ""
      , title = ""
      , summary = ""
      , contact = initContact
      , socials = initSocials
      , experiences = initExperiences
      , skills = initSkills
      , certifications = initCertifications
      }
    , Cmd.none
    )


initContact : Contact
initContact =
    { phone = ""
    , email = ""
    , location = ""
    }


initSocials : Array Social
initSocials =
    Array.fromList [ emptySocial ]


emptySocial : Social
emptySocial =
    { name = ""
    , url = ""
    }


initExperiences : Array Experience
initExperiences =
    Array.fromList [ emptyExperience ]


emptyExperience : Experience
emptyExperience =
    { title = ""
    , name = ""
    , duration = ""
    , location = ""
    , descriptions = []
    , skills = []
    }


initSkills : List Skill
initSkills =
    [ emptySkill ]


emptySkill : Skill
emptySkill =
    { name = ""
    , proficiency = 0
    }


initCertifications : List Certification
initCertifications =
    [ emptyCertification ]


emptyCertification : Certification
emptyCertification =
    { title = ""
    , organization = ""
    , location = ""
    , year = ""
    }


-- Update


type Msg
    = SetName String
    | SetSummary String
    | SetTitle String
    | ContactMsg ContactMsg
    | SocialMsg SocialMsg
    | ExperienceMsg ExperienceMsg
    | SkillMsg SkillMsg
    | CertificationMsg CertificationMsg
    | AddSocial
    | AddExperience


type ContactMsg
    = SetPhone String
    | SetEmail String
    | SetLocation String


type SocialMsg
    = SetSocialName Int String
    | SetSocialUrl Int String


type ExperienceMsg
    = SetExperienceTitle String
    | SetExperienceName String
    | SetExperienceDuration String
    | SetExperienceLocation String
    | SetExperienceDescription String
    | SetExperienceSkills String


type SkillMsg
    = SetSkillName String
    | SetSkillProficiency String

type CertificationMsg
    = SetCertificationTitle String
    | SetCertificationOrganization String
    | SetCertificationYear String
    | SetCertificationLocation String


{-| Update function for handling Msg types
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        newModel =
            case msg of
                SetName name ->
                    { model | name = name }

                SetSummary summary ->
                    { model | summary = summary }

                SetTitle title ->
                    { model | title = title }

                ContactMsg contactMsg ->
                    { model | contact = updateContact contactMsg model.contact }

                SocialMsg socialMsg ->
                    { model | socials = updateSocials socialMsg model.socials }

                ExperienceMsg experienceMsg ->
                    { model | experiences = updateExperiences experienceMsg model.experiences }

                SkillMsg skillMsg ->
                    { model | skills = updateSkills skillMsg model.skills }

                CertificationMsg certificationMsg ->
                    { model | certifications = updateCertifications certificationMsg model.certifications }

                AddSocial ->
                    { model | socials = Array.push emptySocial model.socials }

                AddExperience ->
                    { model | experiences = Array.push emptyExperience model.experiences }
    in
    ( newModel, updateDisplay newModel )


updateContact : ContactMsg -> Contact -> Contact
updateContact msg contact =
    case msg of
        SetPhone phone ->
            { contact | phone = phone }

        SetEmail email ->
            { contact | email = email }

        SetLocation location ->
            { contact | location = location }


updateSocials : SocialMsg -> Array Social -> Array Social
updateSocials msg socials =
    let
        maybeSocial index =
            Array.get index socials
    in
    case msg of
        SetSocialName index name ->
            case (maybeSocial index) of
                Just social ->
                    Array.set index { social | name = name } socials
                Nothing ->
                    socials
        SetSocialUrl index url ->
            case (maybeSocial index) of
                Just social ->
                    Array.set index { social | url = url } socials
                Nothing ->
                    socials

updateExperiences : ExperienceMsg -> Array Experience -> Array Experience
updateExperiences msg experiences =
    let
        maybeExperience =
            Array.get 0 experiences

        newExperience =
            case maybeExperience of
                Just experience ->
                    case msg of
                        SetExperienceTitle title ->
                            { experience | title = title }

                        SetExperienceName name ->
                            { experience | name = name }

                        SetExperienceDuration duration ->
                            { experience | duration = duration }

                        SetExperienceLocation location ->
                            { experience | location = location }

                        SetExperienceDescription description ->
                            { experience | descriptions = String.split ". " description }

                        SetExperienceSkills skills ->
                            { experience | skills = String.split "," skills |> List.map String.trim }

                Nothing ->
                    emptyExperience
    in
    Array.fromList [ newExperience ]


updateSkills : SkillMsg -> List Skill -> List Skill
updateSkills msg skills =
    let
        maybeSkill =
            List.head skills

        newSkill =
            case maybeSkill of
                Just skill ->
                    case msg of
                        SetSkillName name ->
                            { skill | name = name }

                        SetSkillProficiency proficiency ->
                            { skill | proficiency = Maybe.withDefault 0 (String.toInt proficiency) }

                Nothing ->
                    emptySkill
    in
    [ newSkill ]


updateCertifications : CertificationMsg -> List Certification -> List Certification
updateCertifications certificationMsg certifications =
    let
        maybeCertification =
            List.head certifications
        
        newCertification =
            case maybeCertification of
                Just certification ->
                    case certificationMsg of
                        SetCertificationTitle title ->
                            { certification | title = title }

                        SetCertificationOrganization organization ->
                            { certification | organization = organization }

                        SetCertificationYear year ->
                            { certification | year = year }

                        SetCertificationLocation location ->
                            { certification | location = location }

                Nothing ->
                    emptyCertification
    in
    [ newCertification ]


{-| Subscrtions functions to handle subscriptions
-}
subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- View


{-| Main view function for handling applictions view
-}
view : Model -> Html Msg
view model =
    div []
        [ div [ class "input__section" ]
            [ viewInputSectionHeader "Your Details"
            , viewLabel "name" "Name"
            , viewInput "name" "Name" model.name SetName
            , viewLabel "title" "Title"
            , viewInput "title" "Title" model.title SetTitle
            , viewLabel "summary" "Summary"
            , viewInput "summary" "Summary" model.summary SetSummary
            ]
        , div [ class "input__section" ]
            [ viewInputSectionHeader "Contact Details"
            , viewLabel "phone" "Phone"
            , viewInput "phone" "Phone" model.contact.phone (ContactMsg << SetPhone)
            , viewLabel "email" "Email"
            , viewInput "email" "Email" model.contact.email (ContactMsg << SetEmail)
            , viewLabel "location" "Location"
            , viewInput "location" "Location" model.contact.location (ContactMsg << SetLocation)
            ]
        , div [ class "input__section" ]
            [ viewInputSectionHeader "Social"
            , viewSocial model.socials
            , button [ onClick AddSocial ] [ text "+ Add Another" ]
            ]
        , div [ class "input__section" ]
            [viewInputSectionHeader "Experiences"
            , viewExperience model.experiences
            , button [ onClick AddExperience ] [ text "+ Add Experience " ]
            ]
        , div [ class "input__section" ]
            (viewInputSectionHeader "Skills"
                :: List.map viewSkillInputs model.skills
            )
        , div [ class "input__section" ]
            (viewInputSectionHeader "Certifications"
                :: List.map viewCertificationsInputs model.certifications
            )
        ]


viewInputSectionHeader : String -> Html Msg
viewInputSectionHeader title =
    div [ class "section__header" ] [ text title ]


viewLabel : String -> String -> Html Msg
viewLabel id_ text_ =
    label [ for id_ ] [ text text_ ]


viewInput : String -> String -> String -> (String -> Msg) -> Html Msg
viewInput id_ placeholder_ value_ msg_ =
    input
        [ id id_
        , type_ "text"
        , placeholder placeholder_
        , value value_
        , onInput msg_
        ]
        []


viewInputRange : String -> Int -> (String -> Msg) -> Html Msg
viewInputRange id_ value_ msg_ =
    input
        [ id id_
        , type_ "range"
        , value (String.fromInt value_)
        , attribute "min" "0"
        , attribute "max" "5"
        , onInput msg_
        ]
        []
        

viewSocial : Array Social -> Html Msg
viewSocial socials =
    div []
        ( List.map viewSocialInputs (Array.toIndexedList socials) ) 


viewSocialInputs : (Int, Social) -> Html Msg
viewSocialInputs tuple =
    let
        index =
            Tuple.first tuple
        social =
            Tuple.second tuple
    in
    div []
        [ viewLabel "name" "Name"
        , viewInput "name" "Name" social.name (SocialMsg << SetSocialName index)
        , viewLabel "url" "URL"
        , viewInput "url" "Url" social.url (SocialMsg << SetSocialUrl index)
        ]


viewExperience : Array Experience -> Html Msg
viewExperience experiences =
    div []
        ( Array.toList (Array.map viewExperienceInputs experiences ))


viewExperienceInputs : Experience -> Html Msg
viewExperienceInputs experience =
    div []
        [ viewLabel "title" "Title"
        , viewInput "title" "Title" experience.title (ExperienceMsg << SetExperienceTitle)
        , viewLabel "organization" "Organization"
        , viewInput "organization" "Organization" experience.name (ExperienceMsg << SetExperienceName)
        , viewLabel "duration" "Duration"
        , viewInput "duration" "Duration" experience.duration (ExperienceMsg << SetExperienceDuration)
        , viewLabel "location" "Location"
        , viewInput "location" "Location" experience.location (ExperienceMsg << SetExperienceLocation)
        , viewLabel "description" "Description"
        , viewInput "description" "Description" (String.join ". " experience.descriptions) (ExperienceMsg << SetExperienceDescription)
        , viewLabel "skills" "Skills"
        , viewInput "skills" "Skills" (String.join "," experience.skills) (ExperienceMsg << SetExperienceSkills)
        ]


viewSkillInputs : Skill -> Html Msg
viewSkillInputs skill =
    div []
        [ viewLabel "name" "Name"
        , viewInput "name" "Name" skill.name (SkillMsg << SetSkillName)
        , viewLabel "proficiency" "Proficiency"
        , viewInputRange "proficiency" skill.proficiency (SkillMsg << SetSkillProficiency)
        ]


viewCertificationsInputs : Certification -> Html Msg
viewCertificationsInputs certification =
    div []
        [ viewLabel "title" "Title"
        , viewInput "title" "Title" certification.title (CertificationMsg << SetCertificationTitle)
        , viewLabel "organization" "Organization"
        , viewInput "organization" "Organization" certification.organization (CertificationMsg << SetCertificationOrganization)
        , viewLabel "year" "Year"
        , viewInput "year" "Year" certification.year (CertificationMsg << SetCertificationYear)
        , viewLabel "location" "Location"
        , viewInput "location" "Location" certification.location (CertificationMsg << SetCertificationLocation)
        ]
