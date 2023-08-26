port module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, for, id, placeholder, type_, value)
import Html.Events exposing (onInput)



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
    , socials : List Social
    , experiences : List Experience
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
      }
    , Cmd.none
    )


initContact : Contact
initContact =
    { phone = ""
    , email = ""
    , location = ""
    }


initSocials : List Social
initSocials =
    [ emptySocial ]


emptySocial : Social
emptySocial =
    { name = ""
    , url = ""
    }


initExperiences : List Experience
initExperiences =
    [ emptyExperience ]


emptyExperience : Experience
emptyExperience =
    { title = ""
    , name = ""
    , duration = ""
    , location = ""
    , descriptions = []
    , skills = []
    }



-- Update


type Msg
    = SetName String
    | SetSummary String
    | SetTitle String
    | ContactMsg ContactMsg
    | SocialMsg SocialMsg
    | ExperienceMsg ExperienceMsg


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


updateSocials : SocialMsg -> List Social -> List Social
updateSocials msg socials =
    let
        maybeSocial =
            List.head socials

        newSocial =
            case maybeSocial of
                Just social ->
                    case msg of
                        SetSocialName name ->
                            { social | name = name }

                        SetSocialUrl url ->
                            { social | url = url }

                Nothing ->
                    emptySocial
    in
    newSocial :: []


updateExperiences : ExperienceMsg -> List Experience -> List Experience
updateExperiences msg experiences =
    let
        maybeExperience =
            List.head experiences

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
                            { experience | skills = String.split "," skills |> List.map (\skill -> String.trim skill) }

                Nothing ->
                    emptyExperience
    in
    newExperience :: []


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
            (viewInputSectionHeader "Social"
                :: List.map (\social -> viewSocialInputs social) model.socials
            )
        , div [ class "input__section" ]
            (viewInputSectionHeader "Experiences"
                :: List.map (\experience -> viewExperienceInputs experience) model.experiences
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


viewSocialInputs : Social -> Html Msg
viewSocialInputs social =
    div []
        [ viewLabel "name" "Name"
        , viewInput "name" "Name" social.name (SocialMsg << SetSocialName)
        , viewLabel "url" "URL"
        , viewInput "url" "Url" social.url (SocialMsg << SetSocialUrl)
        ]


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
