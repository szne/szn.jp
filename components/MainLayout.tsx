import {
  PageTransitionAnimation,
  PageTransitionContext,
  PageTransitionLayout,
} from '@/libs/PageTransition'

export const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageTransitionContext>
        <PageTransitionAnimation>
          <PageTransitionLayout>{children}</PageTransitionLayout>
        </PageTransitionAnimation>
      </PageTransitionContext>
    </>
  )
}
