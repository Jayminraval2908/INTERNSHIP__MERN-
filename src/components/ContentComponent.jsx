import React from 'react'


export const ContentComponent = () => {
    const PersonalInfo={
        born:"New Delhi",
        birth:"5 November 1988",
        age:37,
        Nickname:{
            name1:"Cheeku",
            name2:"Chase Master",
            name3:"Run Machine",
            name4:"King Kohli"
        },
        Height :175,
        Batting:"Right-Handed",
        Bowling:"Right-arm Medium",
        Role : "Top-Order batter"
    };

    const InternationalInfo={
        Nationalside : "India(2008-present)",
        TestDebut:"20 JUNE 2011 v West indies",
        OdiDebut:"18 August 2008 v Sri lanka",
        LastOdi:"18 January 2026 v New Zealand",
        T20IDebut:"12 JUNE 2010 v Zimbabwe",
        LastT20I:"29 JUNE 2024 v South Africa"
    };


    
  return (
    <>
    <div className='Container'>
    <div className='content'>
        <h3 className='heading'>Personal Information</h3>
        <img src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="virat" />
        <p><b>Born</b>       : {PersonalInfo.born}</p>
        <p><b>Birth-date</b> : {PersonalInfo.birth}</p>
        <p><b>Age </b>       : {PersonalInfo.age}</p>
        <p><b>Nickname </b>  : {PersonalInfo.Nickname.name1}, {PersonalInfo.Nickname.name2}, {PersonalInfo.Nickname.name3}, {PersonalInfo.Nickname.name4}</p>
        <p><b>Height </b>    : {PersonalInfo.Height}</p>
        <p><b>Batting </b>   : {PersonalInfo.Batting}</p>
        <p><b>Bowling </b>   : {PersonalInfo.Bowling}</p>
        <p><b>Role </b>      : {PersonalInfo.Role}</p>

        <h3 className='heading'>International Information</h3>
        <p><b>National side</b> : {InternationalInfo.Nationalside}</p>
        <p><b>Test debut </b>   : {InternationalInfo.TestDebut}</p>
        <p><b>ODI debut</b>     : {InternationalInfo.OdiDebut}</p>
        <p><b>Last ODI </b>     : {InternationalInfo.LastOdi}</p>
        <p><b>T20I debut</b>    : {InternationalInfo.T20IDebut}</p>
        <p><b>Last T20I  </b>   : {InternationalInfo.LastT20I}</p>
    </div>
    </div>

    </>
  )
}
