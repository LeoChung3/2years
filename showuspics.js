export default class showuspics {
    constructor() 
    {
        this.numberofpic = 0
    }
    draw(ctx)
        {
            
            const imagePath1 = './images/elevator.png';
            const imagePath2 = './images/hand.png';
            const imagePath3 = './images/golf.png';
            const imagePath4 = './images/kissing.png';
            const imagePath5 = './images/usascats.png';
            
            
            if(this.numberofpic == 0)
                {
            const img = new Image();
            img.src = imagePath1;
            ctx.drawImage(img, 0, 0, 2094, 2824);
                }
            
                if(this.numberofpic == 1)
                    {
            const img2 = new Image();
            img2.src = imagePath2;
            ctx.drawImage(img2, 0, 200, 2000, 2000);
                    }

                    if(this.numberofpic == 2)
                        {
            const img3 = new Image();
            img3.src = imagePath3;
            ctx.drawImage(img3, 0, 200, 2000, 2000);
                        }

                        if(this.numberofpic == 3)
                            {
            const img4 = new Image();
            img4.src = imagePath4;
            ctx.drawImage(img4, 0, 200, 2000, 2000);
                            }

                            if(this.numberofpic == 4)
                                {
            const img5 = new Image();
            img5.src = imagePath5;
            ctx.drawImage(img5, 0, 200, 2000, 2000);
                                }
        }

    next()
    
    {
        this.numberofpic += 1;
        if(this.numberofpic == 5)
        {
            this.numberofpic = 0;
        }
    }
    back()
    {
        this.numberofpic -= 1;

        if(this.numberofpic == -1)
        {
            this.numberofpic = 5;
        }
    }
}