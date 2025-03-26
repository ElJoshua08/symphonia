'use client';

import { verifyEmail } from '@/services/auth.service';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { toast } from 'sonner';

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const tokenHash = searchParams.get('token_hash');
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyData() {
      if (!token || !tokenHash) {
        return;
      }

      const { error } = await verifyEmail(token, tokenHash);

      if (error) {
        toast.error(error);
        return;
      }

      setLoading(false);
      router.push('/app');
    }

    verifyData();
  }, [token, tokenHash, loading]);

  if (!token || !tokenHash) {
    return <div>Vaya, parece que este link es inválido o ha caducado.</div>;
  }

  return loading ? (
    <div>Cargando...</div>
  ) : (
    <div>
      Tu correo ha sido verificado correctamente, bienvenido a Symphonia!
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
