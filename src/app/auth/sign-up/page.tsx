import { PageWrapper, SubmitButton, TextInput } from "@/components";
import { SignUpForm } from "./SignUpForm";

export default function SingUpPage() {
  return (
    <PageWrapper>
      <div className="flex-center w-full min-h-screen">
        <div className="w-1/2 max-w-[540px] mx-auto border border-slate-800 rounded-lg p-8">
          <h1 className="text-3xl">Create your account:</h1>
          <SignUpForm />
        </div>
      </div>
    </PageWrapper>
  );
}
