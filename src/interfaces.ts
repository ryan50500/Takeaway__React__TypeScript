
    interface Icart {
        quantity: number,
        takeaway: string,
        totalCost: number,
        takeawayImage: any,
        price: number,
    }

    interface ITakeawayClicked {
        quantity: number,
        takeaway: string,
        totalCost: number,
        takeawayImage: any,
        price: number
    }

    export {
        Icart,
        ITakeawayClicked
      }