'use server';

import db from '@/lib/db';
import getSession from '@/lib/session';
import { revalidateTag } from 'next/cache';

export async function likeTweet(tweetId: number) {
  // await new Promise((r) => setTimeout(r, 10000));
  const session = await getSession();
  try {
    await db.like.create({
      data: {
        tweetId,
        userId: session.id!,
      },
    });
    revalidateTag(`like-status-${tweetId}`);
  } catch (e) {
    console.error('Error fetching session:', e);
  }
}

export async function dislikeTweet(tweetId: number) {
  // await new Promise((r) => setTimeout(r, 10000));
  try {
    const session = await getSession();
    await db.like.delete({
      where: {
        id: {
          tweetId,
          userId: session.id!,
        },
      },
    });
    revalidateTag(`like-status-${tweetId}`);
  } catch (e) {
    console.error('Error fetching session:', e);
  }
}
