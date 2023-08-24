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


{-| Init function to initialize application state
-}
init : () -> ( Model, Cmd Msg )
init () =
    ( { name = ""
      , title = ""
      , summary = ""
      , contact = initContact
      , socials = initSocials
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
    [ { name = ""
      , url = ""
      }
    ]



-- Update


type Msg
    = SetName String
    | SetSummary String
    | SetTitle String
    | ContactMsg ContactMsg
    | SocialMsg SocialMsg


type ContactMsg
    = SetPhone String
    | SetEmail String
    | SetLocation String


type SocialMsg
    = SetSocialName String
    | SetSocialUrl String


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
                    { name = ""
                    , url = ""
                    }
    in
    newSocial :: []


{-| Subscrtions functions to handle subscriptions
-}
subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- View


{-| Main view function for handling applictions view
-}
view : Model -> Html
 Msg
view model =
    div []
        [ div [ class "input__section" ]
            [ div [ class "section__header" ] [ text "Your Details" ]
            , label [ for "name" ] [ text "Name" ]
            , input
                [ id "name"
                , type_ "text"
                , placeholder "Name"
                , value model.name
                , onInput SetName
                ]
                []
            , label [ for "title" ] [ text "Title" ]
            , input
                [ id "title"
                , type_ "text"
                , placeholder "Title "
                , onInput SetTitle
                ]
                []
            , label [ for "summary" ] [ text "Summary" ]
            , input
                [ id "summary"
                , type_ "text"
                , placeholder "Summary"
                , onInput SetSummary
                ]
                []
            ]
        , div [ class "input__section" ]
            [ div [ class "section__header" ] [ text "Contact Details" ]
            , label [ for "phone" ] [ text "Phone" ]
            , input
                [ id "phone"
                , type_ "text"
                , placeholder "Phone"
                , value model.contact.phone
                , onInput (ContactMsg << SetPhone)
                ]
                []
            , label [ for "email" ] [ text "Email" ]
            , input
                [ id "email"
                , type_ "text"
                , placeholder "Email"
                , value model.contact.email
                , onInput (ContactMsg << SetEmail)
                ]
                []
            , label [ for "location" ] [ text "Location" ]
            , input
                [ id "location"
                , type_ "text"
                , placeholder "Location"
                , value model.contact.location
                , onInput (ContactMsg << SetLocation)
                ]
                []
            ]
        , div [ class "input__section" ]
            (div [ class "section__header" ] [ text "Social" ]
                :: List.map (\social -> viewSocialInput social) model.socials
            )
        ]


viewSocialInput : Social -> Html Msg
viewSocialInput social =
    div []
        [ label [ for "name" ] [ text "Name" ]
        , input
            [ id "name"
            , type_ "text"
            , placeholder "Name"
            , value social.name
            , onInput (SocialMsg << SetSocialName)
            ]
            []
        , label [ for "url" ] [ text "URL" ]
        , input
            [ id "url"
            , type_ "text"
            , placeholder "url"
            , value social.url
            , onInput (SocialMsg << SetSocialUrl)
            ]
            []
        ]
