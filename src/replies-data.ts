// const users = [
// {
//   id: 'a',
//   username: 'Swastik Patro',
//   img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688980483/Gutargu-social/psafyt10mpcsh64esgso.jpg',
// },
// {
//   id: 'b',
//   username: 'Bhavesh Upadhyay',
//   img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689953698/Gutargu-social/egvux0e3fmr6vn9auwy8.jpg',
// },
// {
//   id: 'c',
//   username: 'Raj',
//   img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688977504/raj-profile_jtmq87.jpg',
// },
//   {
//     id: 'd',
//     username: 'Jethalal Patro',
//     img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688807062/Gutargu-social/efeqfxwub7so1143u4jp.png',
//   },
//   {
//     id: 'e',
//     username: 'Shobit Raj',
//     img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689065602/Gutargu-social/eeyeafusasjt9znveey4.jpg',
//   },
// {
//   id: 'f',
//   username: 'Anime',
//   img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689929500/Gutargu-social/ncawbtooltmsqw0px0i6.png',
// },
// ];

export const replies = {
  id: 'root',
  replies: [
    {
      id: 'comment1',
      isDeleted: false,
      text: 'This is the first comment.',
      userData: {
        id: 'a',
        username: 'Swastik Patro',
        img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688980483/Gutargu-social/psafyt10mpcsh64esgso.jpg',
      },
      replies: [
        {
          id: 'reply1',
          isDeleted: false,
          text: 'Reply to the first comment.',
          userData: {
            id: 'b',
            username: 'Bhavesh Upadhyay',
            img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689953698/Gutargu-social/egvux0e3fmr6vn9auwy8.jpg',
          },
          replies: [
            {
              id: 'reply2',
              isDeleted: false,
              text: 'Another reply to the first comment.',
              userData: {
                id: 'a',
                username: 'Swastik Patro',
                img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688980483/Gutargu-social/psafyt10mpcsh64esgso.jpg',
              },
              replies: [
                {
                  id: 'reply1000',
                  isDeleted: false,
                  text: 'Reply to the nth comment.',
                  userData: {
                    id: 'f',
                    username: 'Anime',
                    img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689929500/Gutargu-social/ncawbtooltmsqw0px0i6.png',
                  },
                  replies: [
                    {
                      id: 'reply1002',
                      isDeleted: false,
                      text: 'Another reply to the nth comment.',
                      userData: {
                        id: 'a',
                        username: 'Swastik Patro',
                        img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688980483/Gutargu-social/psafyt10mpcsh64esgso.jpg',
                      },
                      replies: [],
                    },
                  ],
                },
                {
                  id: 'reply1001',
                  isDeleted: false,
                  text: 'Reply to the n+1th comment.',

                  userData: {
                    id: 'f',
                    username: 'Anime',
                    img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689929500/Gutargu-social/ncawbtooltmsqw0px0i6.png',
                  },
                  replies: [],
                },
              ],
            },
            {
              id: 'reply3',
              isDeleted: false,
              text: 'Yet another reply to the first comment.',

              userData: {
                id: 'c',
                username: 'Raj',
                img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688977504/raj-profile_jtmq87.jpg',
              },
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 'comment2',
      isDeleted: false,
      text: 'This is the second comment.',
      userData: {
        id: 'f',
        username: 'Anime',
        img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689929500/Gutargu-social/ncawbtooltmsqw0px0i6.png',
      },
      replies: [],
    },
    {
      id: 'comment3',
      userData: {
        id: 'c',
        username: 'Raj',
        img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688977504/raj-profile_jtmq87.jpg',
      },
      isDeleted: false,
      text: 'Another top-level comment.',
      replies: [
        {
          id: 'reply4',
          isDeleted: false,
          text: 'Reply to the second comment.',
          userData: {
            id: 'f',
            username: 'Anime',
            img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689929500/Gutargu-social/ncawbtooltmsqw0px0i6.png',
          },
          replies: [],
        },
      ],
    },
    {
      id: 'comment4',
      isDeleted: false,
      text: 'Yet another comment.',
      userData: {
        id: 'b',
        username: 'Bhavesh Upadhyay',
        img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1689953698/Gutargu-social/egvux0e3fmr6vn9auwy8.jpg',
      },
      replies: [],
    },
    {
      id: 'comment5',
      isDeleted: false,
      text: 'And one more comment.',
      userData: {
        id: 'c',
        username: 'Raj',
        img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688977504/raj-profile_jtmq87.jpg',
      },
      replies: [],
    },
    {
      id: 'comment6',
      isDeleted: false,
      text: 'Last comment in the list.',
      userData: {
        id: 'd',
        username: 'Jethalal Patro',
        img: 'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688807062/Gutargu-social/efeqfxwub7so1143u4jp.png',
      },
      replies: [],
    },
  ],
};
