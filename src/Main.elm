port module Main exposing (main)

import Array exposing (..)
import Browser
import Html exposing (..)
import Html.Attributes exposing (attribute, class, for, id, placeholder, type_, value)
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
    , phone : String
    , email : String
    , location : String
    , socials : Array Social
    , experiences : Array Experience
    , skills : Array Skill
    , certifications : Array Certification
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
      , phone = ""
      , email = ""
      , location = ""
      , socials = initSocials
      , experiences = initExperiences
      , skills = initSkills
      , certifications = initCertifications
      }
    , Cmd.none
    )


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


initCertifications : Array Certification
initCertifications =
    Array.fromList [ emptyCertification ]


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
    | SetTitle String
    | SetSummary String
    | SetPhone String
    | SetEmail String
    | SetLocation String
    | SocialMsg Int SocialMsg
    | ExperienceMsg Int ExperienceMsg
    | SkillMsg Int SkillMsg
    | CertificationMsg Int CertificationMsg
    | AddSocial
    | RemoveSocial Int
    | AddExperience
    | RemoveExperience Int
    | AddSkill
    | RemoveSkill Int
    | AddCertification
    | RemoveCertification Int


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

                SetPhone phone ->
                    { model | phone = phone }

                SetEmail email ->
                    { model | email = email }

                SetLocation location ->
                    { model | location = location }

                SocialMsg index socialMsg ->
                    { model | socials = updateSocials index socialMsg model.socials }

                ExperienceMsg index experienceMsg ->
                    { model | experiences = updateExperiences index experienceMsg model.experiences }

                SkillMsg index skillMsg ->
                    { model | skills = updateSkills index skillMsg model.skills }

                CertificationMsg index certificationMsg ->
                    { model | certifications = updateCertifications index certificationMsg model.certifications }

                AddSocial ->
                    { model | socials = Array.push emptySocial model.socials }

                RemoveSocial socialIndex ->
                    { model | socials = removeSocial socialIndex model.socials }

                AddExperience ->
                    { model | experiences = Array.push emptyExperience model.experiences }

                RemoveExperience experienceIndex ->
                    { model | experiences =  removeExperience experienceIndex model.experiences }

                AddSkill ->
                    { model | skills = Array.push emptySkill model.skills }

                RemoveSkill skillIndex ->
                    { model | skills = removeSkill skillIndex model.skills }

                AddCertification ->
                    { model | certifications = Array.push emptyCertification model.certifications }

                RemoveCertification certificationIndex ->
                    { model | certifications = removeCertification certificationIndex model.certifications }
    in
    ( newModel, updateDisplay newModel )


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


removeSocial : Int -> Array Social -> Array Social
removeSocial socialIndex socials =
    Array.toIndexedList socials
        |> List.filter (\( index, _ ) -> index /= socialIndex)
        |> List.map Tuple.second
        |> Array.fromList


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
                    Array.set index { experience | title = title } experiences

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


removeExperience : Int -> Array Experience -> Array Experience
removeExperience experienceIndex experiences =
    Array.toIndexedList experiences
        |> List.filter (\( index, _ ) -> experienceIndex /= index)
        |> List.map Tuple.second
        |> Array.fromList


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


removeSkill : Int -> Array Skill -> Array Skill
removeSkill skillIndex skills =
    Array.toIndexedList skills
        |> List.filter (\( index, _ ) -> skillIndex /= index)
        |> List.map Tuple.second
        |> Array.fromList


updateCertifications : Int -> CertificationMsg -> Array Certification -> Array Certification
updateCertifications index msg certifications =
    let
        maybeCertification =
            Array.get index certifications
    in
    case maybeCertification of
        Just certification ->
            case msg of
                SetCertificationTitle title ->
                    Array.set index { certification | title = title } certifications

                SetCertificationOrganization organization ->
                    Array.set index { certification | organization = organization } certifications

                SetCertificationYear year ->
                    Array.set index { certification | year = year } certifications

                SetCertificationLocation location ->
                    Array.set index { certification | location = location } certifications

        Nothing ->
            certifications


removeCertification : Int -> Array Certification -> Array Certification
removeCertification certificationIndex certifications =
    Array.toIndexedList certifications
        |> List.filter (\( index, _ ) -> certificationIndex /= index)
        |> List.map Tuple.second
        |> Array.fromList


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
            , viewTextArea "summary" "Summary" model.summary SetSummary
            ]
        , div [ class "input__section" ]
            [ viewInputSectionHeader "Contact Details"
            , viewLabel "phone" "Phone"
            , viewInput "phone" "Phone" model.phone SetPhone
            , viewLabel "email" "Email"
            , viewInput "email" "Email" model.email SetEmail
            , viewLabel "location" "Location"
            , viewInput "location" "Location" model.location SetLocation
            ]
        , div [ class "input__section" ]
            [ viewInputSectionHeader "Social"
            , viewSocial model.socials
            , button [ onClick AddSocial ] [ text "+ Add Another" ]
            ]
        , div [ class "input__section" ]
            [ viewInputSectionHeader "Experiences"
            , viewExperience model.experiences
            , button [ onClick AddExperience ] [ text "+ Add Experience " ]
            ]
        , div [ class "input__section" ]
            [ viewInputSectionHeader "Skills"
            , viewSkill model.skills
            , button [ onClick AddSkill ] [ text "+ Add Skill" ]
            ]
        , div [ class "input__section" ]
            [ viewInputSectionHeader "Certifications"
            , viewCertification model.certifications
            , button [ onClick AddCertification ] [ text "+ Add Certification" ]
            ]
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


viewTextArea : String -> String -> String -> (String -> Msg) -> Html Msg
viewTextArea id_ placeholder_ value_ msg_ =
    textarea
        [ id id_
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
        (List.map viewSocialInputs (Array.toIndexedList socials))


viewSocialInputs : ( Int, Social ) -> Html Msg
viewSocialInputs ( index, social ) =
    div [ class "section__content" ]
        [ viewRemoveButton index <| RemoveSocial index
        , viewLabel "name" "Name"
        , viewInput "name" "Name" social.name (SocialMsg index << SetSocialName)
        , viewLabel "url" "URL"
        , viewInput "url" "Url" social.url (SocialMsg index << SetSocialUrl)
        ]


viewExperience : Array Experience -> Html Msg
viewExperience experiences =
    div []
        (List.map viewExperienceInputs (Array.toIndexedList experiences))


viewExperienceInputs : ( Int, Experience ) -> Html Msg
viewExperienceInputs ( index, experience )=
    div [ class "section__content" ]
        [ viewRemoveButton index <| RemoveExperience index
        , viewLabel "title" "Title"
        , viewInput "title" "Title" experience.title (ExperienceMsg index << SetExperienceTitle)
        , viewLabel "organization" "Organization"
        , viewInput "organization" "Organization" experience.name (ExperienceMsg index << SetExperienceName)
        , viewLabel "duration" "Duration"
        , viewInput "duration" "Duration" experience.duration (ExperienceMsg index << SetExperienceDuration)
        , viewLabel "location" "Location"
        , viewInput "location" "Location" experience.location (ExperienceMsg index << SetExperienceLocation)
        , viewLabel "description" "Description"
        , viewTextArea "description" "Description" (String.join ". " experience.descriptions) (ExperienceMsg index << SetExperienceDescription)
        , viewLabel "skills" "Skills"
        , viewInput "skills" "Skills" (String.join "," experience.skills) (ExperienceMsg index << SetExperienceSkills)
        ]


viewSkill : Array Skill -> Html Msg
viewSkill skills =
    div []
        (List.map viewSkillInputs (Array.toIndexedList skills))


viewSkillInputs : ( Int, Skill ) -> Html Msg
viewSkillInputs ( index, skill ) =
    div [ class "section__content" ]
        [ viewRemoveButton index <| RemoveSkill index
        , viewLabel "name" "Name"
        , viewInput "name" "Name" skill.name (SkillMsg index << SetSkillName)
        , viewLabel "proficiency" "Proficiency"
        , viewInputRange "proficiency" skill.proficiency (SkillMsg index << SetSkillProficiency)
        ]


viewCertification : Array Certification -> Html Msg
viewCertification certifications =
    div []
        (List.map viewCertificationsInputs (Array.toIndexedList certifications))


viewCertificationsInputs : ( Int, Certification ) -> Html Msg
viewCertificationsInputs ( index, certification) =
    div [ class "section__content" ]
        [ viewRemoveButton index <| RemoveCertification index
        , viewLabel "title" "Title"
        , viewInput "title" "Title" certification.title (CertificationMsg index << SetCertificationTitle)
        , viewLabel "organization" "Organization"
        , viewInput "organization" "Organization" certification.organization (CertificationMsg index << SetCertificationOrganization)
        , viewLabel "year" "Year"
        , viewInput "year" "Year" certification.year (CertificationMsg index << SetCertificationYear)
        , viewLabel "location" "Location"
        , viewInput "location" "Location" certification.location (CertificationMsg index << SetCertificationLocation)
        ]

viewRemoveButton : Int -> Msg -> Html Msg
viewRemoveButton index msg_ =
    case index == 0 of
        True ->
            text ""
        False ->
            div [ class "section__content-remove", onClick msg_ ]
                [ div [ class "section__content-remove-icon" ]
                      [ text "X" ]
                ]
