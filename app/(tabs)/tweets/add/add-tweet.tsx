'use client';

import { uploadTweet } from '@/app/(tabs)/tweets/add/actions';
import { useFormState } from 'react-dom';
import FormButton from '../../../../components/form/form-btn';

export default function AddTweet() {
  const [state, dispatch] = useFormState(uploadTweet, null);
  return (
    <form action={dispatch} className="p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <textarea
          name="tweet"
          required
          placeholder="What’s happening?"
          className="w-full h-28 p-4 rounded-md resize-none"
        />
        {state?.fieldErrors?.tweet && (
          <span className="text-red-400">{state.fieldErrors.tweet}</span>
        )}
      </div>
      <FormButton text="Add tweet" />
    </form>
  );
}
