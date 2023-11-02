const client = require('../../index.js')

client.on("ready", () => {
    
    console.log(`${client.user.tag} connected!`)

    const A= [
    {name: client.config.ACTIVITY.ACTIVITIES.ACTIVITY1,type:client.config.ACTIVITY.ACTIVITIES.ACTIVITYTYPE1}, 
    {name: client.config.ACTIVITY.ACTIVITIES.ACTIVITY2,type:client.config.ACTIVITY.ACTIVITIES.ACTIVITYTYPE2},
    {name: client.config.ACTIVITY.ACTIVITIES.ACTIVITY3,type:client.config.ACTIVITY.ACTIVITIES.ACTIVITYTYPE3},
    ];
    
    setInterval(() => {
    let activ=A[Math.floor(Math.random() * A.length)]
   
    function presence(){
    client.user.setPresence( {
    activities:[activ],
    status: client.config.ACTIVITY.ACTIVITIES.STATUS
    })}
    
    presence()
    
    
    }, client.config.ACTIVITY.ACTIVITIES.INTERVAL);

    
   }
    
    )