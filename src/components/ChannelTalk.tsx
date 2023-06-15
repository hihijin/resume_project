//ChannelService 참조
import ChannelService from "../util/ChannelService";

const Main = () => {
  //2. 설치하기
  ChannelService.loadScript();

  //3. 부트하기
  ChannelService.boot({
    pluginKey: "99de328d-f797-4ca0-8798-164002e8ca7a",
  });
  return <div />;
};

export default Main;
