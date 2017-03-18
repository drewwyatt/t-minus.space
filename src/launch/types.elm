module Launch.Types exposing (..)

type Status = Green | Red | Success | Failed

type alias LaunchListing = 
    { offset : Int
    , count : Int
    , total : Int
    , launches : List Launch
    }

type alias Launch =
    { id : Int
    , name : String
    , net : String
    , tbddate : Int
    , tbdtime : Int
    , status : Status
    , windowstart : String
    , windowend : String
    , isostart : String
    , isoend : String
    , isonet : String
    , wsstamp : Int
    , westamp : Int
    , netstamp : Int
    , infoURLs : List String
    , vidURLs : List String
    , holdreason : String
    , failreason : String
    , probability : String
    , hashtag : String
    }