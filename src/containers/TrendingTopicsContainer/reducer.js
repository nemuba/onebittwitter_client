//* @var initialState
const initialState = {
  hashtags: []
};

//* @reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TRENDINGS':
      return {
        hashtags: [
          ['#OneBitCode', '100k'],
          ['#RubyOnRails', '100k']
        ]
      }
      default:
        return state;
  }
}