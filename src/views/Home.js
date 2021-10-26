import Ame from "ame-super-app-client";

export default class Home {

  HowToBuy = () => {
    Ame.navigation.navigate({
        path: 'HowToBuy',
    });
  };

  myOrders = () => {
    Ame.navigation.navigate({
        path: 'myOrders',
    });
  };

  bannerClick1 = () => {
    Ame.openMiniApp({slug: "com.ooooo.livecommerce"})
  };

  bannerClick2 = () => {
    Ame.openMiniApp({slug: "com.ooooo.livecommerce"})
  };

  bannerClick3 = () => {
    Ame.openMiniApp({slug: "com.ooooo.livecommerce"})
  };

}