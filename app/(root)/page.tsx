import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';
const Home = ()=>
{
    const loggedIn = {firstName:'User'};
    return (
       <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type ='greeting'
                title = "Welcome"
                user ={loggedIn?.firstName ||'Guest'}
                subtext = "Access and Manage Transfer"
                />
                <TotalBalanceBox accounts={[]} totalBanks ={1} totalCurrentBalance = {1250.35}/>
            </header>
            Recent Transactions
        </div>
        <RightSidebar
        user={loggedIn}
        transaction={[]}
        bank={[]}
        />
       </section>
    )
}
export default Home;