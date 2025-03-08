export { MultipleChoice } from './MultipleChoice';
export { TrueFalse } from './TrueFalse';
export { FillInBlanks } from './FillInBlanks';
export { Dropdown } from './Dropdown';
export { Matching } from './Matching';
export { ShortAnswer } from './ShortAnswer';
export { Paragraph } from './Paragraph';
export { FileUploadQuestion } from './FileUpload';

export type QuestionType = 
  | 'multiple-choice'
  | 'true-false'
  | 'fill-in-blanks'
  | 'dropdown'
  | 'matching'
  | 'short-answer'
  | 'paragraph'
  | 'file-upload'; 