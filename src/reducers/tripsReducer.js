const defaultState = {
  sortBy: 'date',
  sortDir: 'desc',
  filters: {},
  trips: [
    {
      id: '1',
      img: [
        '1.jpeg',
      ],
      author: {
        name: 'Benny Sidelinger',
        id: '123',
      },
      date: '1/12/2017',
      title: 'Yodelin burn area',
      body: 'Aliquam condimentum in enim id facilisis. Maecenas a eros ut ex commodo volutpat sed non arcu. Ut egestas lorem non purus bibendum egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras semper tellus ac velit aliquet, ac tempus mauris imperdiet. Suspendisse rhoncus mi a metus fermentum, non fermentum sem lobortis. Duis quis mi metus. Aliquam sit amet euismod dui. Curabitur faucibus lorem sit amet neque vehicula consequat. Pellentesque ante urna, pellentesque vel elit pellentesque, aliquet consectetur neque. Ut laoreet ultricies arcu in pretium. Mauris pharetra, velit eu rutrum gravida, dolor nunc tempor nisl, eget vestibulum sapien est sed mauris. Praesent quis sapien elit. Nullam interdum scelerisque neque ac congue. Integer mattis neque at finibus semper.',
    },
    {
      id: '2',
      img: [
        '2.jpeg',
      ],
      author: {
        name: 'Benny Sidelinger',
        id: '123',
      },
      date: '1/14/2017',
      title: 'Jove peak',
      body: 'Ut tristique viverra ligula id cursus. Donec semper id est ac maximus. Donec venenatis felis eu consectetur molestie. Sed vestibulum ornare lorem sed tempus. Curabitur sed mauris volutpat, placerat orci nec, hendrerit massa. Aliquam sollicitudin nisl ut orci efficitur, quis cursus est tincidunt. Nunc pretium, odio non volutpat ullamcorper, tellus ipsum tristique enim, et suscipit magna erat vel nunc. Nam placerat magna ante, eu finibus tellus molestie at. Pellentesque pretium pharetra dictum. Quisque eu est nec elit malesuada tempor at nec justo. Fusce dapibus viverra mattis. Duis aliquam consequat quam, vel maximus est ullamcorper et. Phasellus et felis turpis. Aliquam erat volutpat. Phasellus mattis maximus nibh, elementum egestas nibh volutpat at. In non pulvinar elit.',
    },
    {
      id: '3',
      img: [
        '3.jpeg',
      ],
      author: {
        name: 'Benny Sidelinger',
        id: '123',
      },
      date: '1/23/2017',
      title: 'Mt. herman',
      body: 'Quisque fermentum erat at nunc ullamcorper convallis. Suspendisse non purus massa. Ut tincidunt venenatis pellentesque. Donec efficitur sapien id hendrerit ultricies. Nullam tempus euismod enim at lacinia. Curabitur eu ultricies massa. Ut luctus est ex, quis suscipit ex tempor in. Morbi fermentum laoreet ligula vel varius. Sed eu odio sed libero porttitor maximus. Donec tincidunt interdum lobortis.',
    },
    {
      id: '4',
      img: [
        '4.jpeg',
      ],
      author: {
        name: 'Benny Sidelinger',
        id: '123',
      },
      date: '1/30/2017',
      title: 'East cascades',
      body: 'Aliquam condimentum in enim id facilisis. Maecenas a eros ut ex commodo volutpat sed non arcu. Ut egestas lorem non purus bibendum egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras semper tellus ac velit aliquet, ac tempus mauris imperdiet. Suspendisse rhoncus mi a metus fermentum, non fermentum sem lobortis. Duis quis mi metus. Aliquam sit amet euismod dui. Curabitur faucibus lorem sit amet neque vehicula consequat. Pellentesque ante urna, pellentesque vel elit pellentesque, aliquet consectetur neque. Ut laoreet ultricies arcu in pretium. Mauris pharetra, velit eu rutrum gravida, dolor nunc tempor nisl, eget vestibulum sapien est sed mauris. Praesent quis sapien elit. Nullam interdum scelerisque neque ac congue. Integer mattis neque at finibus semper.',
    },
    {
      id: '5',
      img: [
        '5.jpeg',
      ],
      author: {
        name: 'Benny Sidelinger',
        id: '123',
      },
      date: '2/1/2017',
      title: 'Paradise glacier',
      body: 'Duis dictum velit eu tortor porttitor commodo. Curabitur dictum lorem at sem tincidunt dictum. Aenean et lobortis odio, ac sodales justo. Sed imperdiet rutrum risus, non eleifend ante luctus sit amet. Fusce in ipsum vel mauris rhoncus vestibulum. Suspendisse pretium arcu urna, id placerat nulla lobortis vitae. Nunc venenatis tincidunt placerat. Nam eu felis pulvinar ipsum mattis rutrum. Donec id elit sed enim elementum aliquet nec at felis. Etiam ac laoreet eros, vel dapibus elit. Vivamus finibus, tortor a dictum cursus, turpis orci varius magna, eget aliquam ligula ligula eu velit. Cras consectetur nulla cursus, accumsan purus hendrerit, mollis elit. Donec dignissim purus quis magna hendrerit, non congue ligula aliquam. Duis non lacinia nisl. Aliquam vestibulum blandit ante quis aliquet.',
    },
  ],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
