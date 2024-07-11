import { PageWrapper, SubmitButton, TextInput } from "@/components";

export default function SingUpPage() {
  return (
    <PageWrapper>
      <div className="flex-center w-full min-h-screen">
        <div className="w-1/2 max-w-[540px] mx-auto border border-slate-800 rounded-lg p-8">
          <h1 className="text-3xl">Create your account:</h1>
          <form action="">
            <TextInput name="name" label="Name" />
            <TextInput name="email" label="Email" inputMode="email" />
            <TextInput name="password" label="Password" type="password" />
            <TextInput
              name="confirm-password"
              label="Confirm Password"
              type="password"
            />
            <SubmitButton label="Create Account" />
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
