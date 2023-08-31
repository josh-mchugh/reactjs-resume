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
    , skills : Array Skill
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


initSkills : Array Skill
initSkills =
    Array.fromList [ emptySkill ]


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
    | SocialMsg Int SocialMsg
    | ExperienceMsg Int ExperienceMsg
    | SkillMsg Int SkillMsg
    | CertificationMsg CertificationMsg
    | AddSocial
    | AddExperience
    | AddSkill


type ContactMsg
    = SetPhone String
    | SetEmail String
    | SetLocation String


type SocialMsg
    = SetSocialName String
    | SetSocialUrl String


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

                SocialMsg index socialMsg ->
                    { model | socials = updateSocials index socialMsg model.socials }

                ExperienceMsg index experienceMsg ->
                    { model | experiences = updateExperiences index experienceMsg model.experiences }

                SkillMsg index skillMsg ->
                    { model | skills = updateSkills index skillMsg model.skills }

                CertificationMsg certificationMsg ->
                    { model | certifications = updateCertifications certificationMsg model.certifications }

                AddSocial ->
                    { model | socials = Array.push emptySocial model.socials }

                AddExperience ->
                    { model | experiences = Array.push emptyExperience model.experiences }

                AddSkill ->
                    { model | skills = Array.push emptySkill model.skills }
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


updateSocials : Int -> SocialMsg -> Array Social -> Array Social
updateSocials index msg socials =
    let
        maybeSocial =
            Array.get index socials
    in
    case maybeSocial of
        Just social ->
            case msg of
                SetSocialName name ->
                    Array.set index { social | name = name } socials
                SetSocialUrl url ->
                    Array.set index { social | url = url } socials
        Nothing ->
            socials

updateExperiences : Int -> ExperienceMsg -> Array Experience -> Array Experience
updateExperiences index msg experiences =
    let
        maybeExperience =
            Array.get index experiences
    in
    case maybeExperience of
        Just experience ->
            case msg of
                SetExperienceTitle title ->
                    Array.set index { experience | title = title} experiences
                SetExperienceName name ->
                    Array.set index { experience | name = name } experiences
                SetExperienceDuration duration ->
                    Array.set index { experience | duration = duration } experiences
                SetExperienceLocation location ->
                    Array.set index { experience | location = location } experiences
                SetExperienceDescription description ->
                    Array.set index { experience | descriptions = String.split ". " description } experiences
                SetExperienceSkills skills ->
                    Array.set index { experience | skills = String.split "," skills |> List.map String.trim } experiences
        Nothing ->
            experiences

updateSkills : Int -> SkillMsg -> Array Skill -> Array Skill
updateSkills index msg skills =
    let
        maybeSkill =
            Array.get index skills
    in
    case maybeSkill of
        Just skill ->
            case msg of
                SetSkillName name ->
                    Array.set index { skill | name = name } skills
                SetSkillProficiency proficiency ->
                    Array.set index { skill | proficiency = Maybe.withDefault 0 (String.toInt proficiency) } skills
        Nothing ->
            skills


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
            [viewInputSectionHeader "Skills"
            , viewSkill model.skills
            , button [ onClick AddSkill ] [ text "+ Add Skill" ]
            ]
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
        , viewInput "name" "Name" social.name (SocialMsg index << SetSocialName)
        , viewLabel "url" "URL"
        , viewInput "url" "Url" social.url (SocialMsg index << SetSocialUrl)
        ]


viewExperience : Array Experience -> Html Msg
viewExperience experiences =
    div []
        ( List.map viewExperienceInputs (Array.toIndexedList experiences) )


viewExperienceInputs : (Int, Experience) -> Html Msg
viewExperienceInputs tuple =
    let
        index =
            Tuple.first tuple
        experience =
            Tuple.second tuple
    in
    div []
        [ viewLabel "title" "Title"
        , viewInput "title" "Title" experience.title (ExperienceMsg index << SetExperienceTitle)
        , viewLabel "organization" "Organization"
        , viewInput "organization" "Organization" experience.name (ExperienceMsg index << SetExperienceName)
        , viewLabel "duration" "Duration"
        , viewInput "duration" "Duration" experience.duration (ExperienceMsg index << SetExperienceDuration)
        , viewLabel "location" "Location"
        , viewInput "location" "Location" experience.location (ExperienceMsg index << SetExperienceLocation)
        , viewLabel "description" "Description"
        , viewInput "description" "Description" (String.join ". " experience.descriptions) (ExperienceMsg index << SetExperienceDescription)
        , viewLabel "skills" "Skills"
        , viewInput "skills" "Skills" (String.join "," experience.skills) (ExperienceMsg index << SetExperienceSkills)
        ]


viewSkill : Array Skill -> Html Msg
viewSkill skills =
    div []
        ( List.map viewSkillInputs (Array.toIndexedList skills) )


viewSkillInputs : (Int, Skill) -> Html Msg
viewSkillInputs tuple =
    let
        index =
            Tuple.first tuple

        skill =
            Tuple.second tuple
    in
    div []
        [ viewLabel "name" "Name"
        , viewInput "name" "Name" skill.name (SkillMsg index << SetSkillName)
        , viewLabel "proficiency" "Proficiency"
        , viewInputRange "proficiency" skill.proficiency (SkillMsg index << SetSkillProficiency)
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
