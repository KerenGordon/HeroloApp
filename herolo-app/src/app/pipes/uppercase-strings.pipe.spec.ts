import { UppercaseStringsPipe } from './uppercase-strings.pipe';

describe('UppercaseStringsPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseStringsPipe();
    expect(pipe).toBeTruthy();
  });
});
