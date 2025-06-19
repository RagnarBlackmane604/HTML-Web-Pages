'use client';

import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { deleteChallenge, getAllChallenges } from '@/app/actions/actions';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';

interface Challenge {
  id: string;
  title: string;
  category: string;
  level: string;
}

export default function ChallengesList() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    async function fetchChallenges() {
      try {
        const data = await getAllChallenges();
        setChallenges(data);
      } catch (error) {
        toast.error('Failed to load challenges');
      }
    }
    fetchChallenges();
  }, []);

  const handleDelete = async (id: string) => {
    startTransition(async () => {
      try {
        const result = await deleteChallenge(id);
        if (result.success) {
          toast.success('Challenge deleted successfully');
          router.refresh(); 
        } else {
          toast.error(`Delete failed: ${result.error || 'Unknown error'}`);
        }
      } catch (error) {
        toast.error('An error occurred during deletion');
      }
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Challenges</h2>
        <Link href="/challenges/create">
          <Button variant="default">+ New Challenge</Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {challenges.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                No challenges found.
              </TableCell>
            </TableRow>
          ) : (
            challenges.map((challenge) => (
              <TableRow key={challenge.id}>
                <TableCell>{challenge.title}</TableCell>
                <TableCell>{challenge.category}</TableCell>
                <TableCell>{challenge.level}</TableCell>
                <TableCell className="space-x-2">
                  <Link href={`/challenges/${challenge.id}/edit`}>
                    <Button size="sm">Edit</Button>
                  </Link>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(challenge.id)}
                    disabled={isPending}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
