import { assert, expect, should } from 'chai';
import { IntentMovie } from 'ava/intents';
// -- Mock
import ActionMock from './action.mock'

describe('IntentMovie', () => {

  let state = {
    actions: [],
    classifier: {categories: []}
  };
  let intent;

  beforeEach( () => {
    intent = {script: IntentMovie, actions: [ActionMock]};
    state.actions = [];
    state.nlp = {tokens: ['i', 'want', 'go', 'to', 'cinema']}
  });

  it('Up & Running', async () => {
    await IntentMovie(state, intent);

    const actions = state.actions;
    expect(actions.length).equal(1);

    const action = actions[0];
    expect(Object.keys(action).length).equal(3)
    expect(action.engine).equal('mock');
    expect(typeof(action.ms)).equal('number');
  });


  it('An intent can hold more than 1 action', async () => {
    // @TODO: Should be in `listen.spec.js`
    intent.actions.push(ActionMock);
    await IntentMovie(state, intent);

    const actions = state.actions;
    expect(actions.length).equal(2);
  });

  it('An intent could be unsuccesful', async () => {
    // @TODO: Should be in `listen.spec.js`
    state.nlp.tokens = ['ava', 'where', 'are', 'you'];
    // should(await IntentMovie(state, intent)).be.rejected
  });
});
