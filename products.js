const developmentProducts = 
{
    normals: [
        {
            quantity: 1,
            priceId: 'pri_01j588rxgw7gaj6rae3g6dsafj',
        },
        {
            quantity: 1,
            priceId: 'pri_01j588sfmqnyr1q6y2489tknnw',
        },
        {
            quantity: 1,
            priceId: 'pri_01jcd8h24d4gdaqhdgfbjxg88n',
        },
        {
            quantity: 1,
            priceId: 'pri_01jcd8qvggsd4ea2qvm6e2acnw',
        },
        {
            quantity: 1,
            priceId: 'pri_01jcd8qcsgrvb09btd7mfvp3bx',
        },
        {
            quantity: 1,
            priceId: 'pri_01jhspn19qz2aqzcx7524rqzpm',
        },
        {
            quantity: 1,
            priceId: 'pri_01jhspm7aj3rs59t8dndyf48hz',
        },
        {
            quantity: 1,
            priceId: 'pri_01jj9saz6q0y5b3yh6a8xzgrjn',
        },
        {
            quantity: 1,
            priceId: 'pri_01jj9sa9e3ewrxq9gqj9g4dwtb',
        },
        {
            quantity: 1,
            priceId: 'pri_01jjktnxh9p6fn35z1vpw8nqxz', // otp
        }    
    ],
    with_discounts: [
        {
            quantity: 1,
            priceId: 'pri_01jjrvhkjrnwkg3q4cy7he55dw' //  1 Day w discount
        },
        {
            quantity: 1,
            priceId: 'pri_01jjktnxh9p6fn35z1vpw8nqxz', // otp
        }   
    ],
    // The following discounts will be applied to the products in the with_discounts array
    // Each discount entry generates a new table section
    discounts: [
        {
            name: 'Discounted products: recurring never ending',
            id: 'dsc_01jjrvp2gx1mv1vd3e8qep04r8', // recurring never ending discount
        },
        {
            name: 'Discounted products: recurring discount ends after 2 periods',
            id: 'dsc_01jjrvnaqd674wz3bwm1x8f830', // recurring - ends after 2 periods
        },
        {
            name: 'Discounted products: one time discount',
            id: 'dsc_01jjrvkh9cya2b5z83xhkp8ewc', // one time discount
        }
    ]
};

const productionProducts = {
    normals: [
        {
            quantity: 1,
            priceId: 'pri_01jjvy9wh3fjtvewjm7gcqqyc7', // monthly_7days_free
        },
        {
            quantity: 1,
            priceId: 'pri_01jjvy98w1vegk6fkyhrtx4564', // monthly
        },
        {
            quantity: 1,
            priceId: 'pri_01jjvyb17qbfeepg7kb78zpyxf', // 1 Day
        },
    ],
    with_discounts: [

    ],
    discounts: [
        
    ]
};